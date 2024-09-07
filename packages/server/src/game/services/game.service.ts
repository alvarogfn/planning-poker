// @ts-nocheck

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { GraphQLError } from "graphql";
import { Model } from "mongoose";
import { CreateGameInput } from "@/game/dto/create-game.input";
import { UpdateGameNameInput } from "@/game/dto/update-game-name.input";
import GameEntity, { GameDocument } from "@/game/entities/game.entity";
import PlayerEntity, { PlayerDocument } from "@/game/entities/player.entity";
import VotationEntity, { VotationDocument } from "@/game/entities/votation.entity";
import VoteEntity, { VoteDocument } from "@/game/entities/vote.entity";
import { Game } from "@/game/models/game.model";
import { Player } from "@/game/models/player.model";
import { Votation } from "@/game/models/votation.model";
import { Service } from "@/helpers/service.interface";
import { toObjectId } from "@/helpers/to-object-id";

@Injectable()
export class GameService implements Service<Game> {
	constructor(
		@InjectModel(GameEntity.name) private readonly gameModel: Model<GameDocument>,
		@InjectModel(VotationEntity.name) private readonly votationModel: Model<VotationDocument>,
		@InjectModel(VoteEntity.name) private readonly voteModel: Model<VoteDocument>,
		@InjectModel(PlayerEntity.name) private readonly playerModel: Model<PlayerDocument>,
	) {}

	public async updateName({ id, name, playerId }: UpdateGameNameInput): Promise<DeepPartial<Game>> {
		const game = await this.gameModel.findOneAndUpdate({ _id: id, createdBy: playerId }, { name });

		if (game === null) throw new GraphQLError("Cannot update game name");

		return { ...game.toObject(), name };
	}

	public async newVotation(gameId: string): Promise<DeepPartial<Game>> {
		const votation = await this.votationModel.create({
			started: true,
			votes: [],
		});

		return this.gameModel.findByIdAndUpdate(
			toObjectId(gameId),
			{
				$push: { votations: toObjectId(votation) },
				$set: { currentVotation: toObjectId(votation) },
			},
			{ new: true },
		);
	}

	public async playerFindAll(game: Game): Promise<DeepPartial<Player>[]> {
		const result = await this.gameModel
			.findOne({ _id: toObjectId(game.id) })
			.populate({ model: "Player", path: "players" })
			.select("players");

		return result.players.map((player) => player.toObject());
	}

	public async votationFindById(game: Game): Promise<DeepPartial<Votation>> {
		return this.votationModel.findById(toObjectId(game.currentVotation));
	}

	public async findById(id: string): Promise<DeepPartial<Game>> {
		const game = await this.gameModel.findById(id).populate({ model: "Votation", path: "votations" });

		return game.toObject();
	}

	public async create({ createdBy, name, votingSystem }: CreateGameInput): Promise<DeepPartial<Game>> {
		const game = await this.gameModel.create({
			createdBy: toObjectId(createdBy),
			name,
			votingSystem: toObjectId(votingSystem),
		});

		const votation = await this.votationModel.create({
			votes: [],
		});

		votation.game = toObjectId(game);

		game.votations = [toObjectId(votation)];
		game.currentVotation = toObjectId(votation);

		await votation.save();
		const updatedGame = await game.save();

		return updatedGame.toObject();
	}
}
