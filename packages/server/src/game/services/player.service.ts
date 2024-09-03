import { PlayerDocument, Player as PlayerEntity } from "@/game/entities/player.entity";
import { Player } from "@/game/models/player.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class PlayerService {
	constructor(@InjectModel(PlayerEntity.name) private playerModel: Model<PlayerDocument>) {}

	public async findById(id: unknown): Promise<DeepPartial<Player>> {
		const player = await this.playerModel.findById(id);

		return player.toObject();
	}

	public async updateName(id: string, name: string): Promise<DeepPartial<Player>> {
		return this.playerModel.findByIdAndUpdate(id, { name }).then((player) => player.toObject());
	}

	public async createPlayer(name = ""): Promise<DeepPartial<Player>> {
		const player = await this.playerModel.create({ name });
		await player.save();

		return player.toObject();
	}
}
