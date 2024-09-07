import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VoteInput } from "@/game/dto/vote.input";
import PlayerEntity, { PlayerDocument } from "@/game/entities/player.entity";
import VotationEntity, { VotationDocument } from "@/game/entities/votation.entity";
import VoteEntity, { VoteDocument } from "@/game/entities/vote.entity";
import { Player } from "@/game/models/player.model";
import { Votation } from "@/game/models/votation.model";
import { Vote } from "@/game/models/vote.model";
import { Service } from "@/helpers/service.interface";
import { toObjectId } from "@/helpers/to-object-id";

@Injectable()
export class VoteService implements Service<Vote> {
	constructor(
		@InjectModel(VoteEntity.name) private readonly voteModel: Model<VoteDocument>,
		@InjectModel(VotationEntity.name) private readonly votationModel: Model<VotationDocument>,
		@InjectModel(PlayerEntity.name) private readonly playerModel: Model<PlayerDocument>,
	) {}

	public async playerFindById(vote: Vote): Promise<DeepPartial<Player>> {
		return this.playerModel.findById(vote.player);
	}

	public async votationFindById(vote: Vote): Promise<DeepPartial<Votation>> {
		const votationEntity = await this.votationModel.findOne({
			votes: toObjectId(vote.id),
		});

		return votationEntity.toObject();
	}

	public async createVote({ card, playerId, votationId }: VoteInput): Promise<DeepPartial<Vote>> {
		const votation = await this.votationModel.findById(votationId);
		if (!votation.started) throw new Error("Votation not started");

		const currentVote = await this.voteModel.findOneAndUpdate(
			{
				player: toObjectId(playerId),
				votation: toObjectId(votationId),
			},
			{
				card: card,
			},
			{ new: true, setDefaultsOnInsert: true, upsert: true },
		);

		await votation.updateOne({
			$addToSet: { votes: toObjectId(currentVote.id) },
		});

		return currentVote.toObject();
	}

	public async findById(id: string): Promise<DeepPartial<Vote>> {
		return this.voteModel.findById(toObjectId(id));
	}
}
