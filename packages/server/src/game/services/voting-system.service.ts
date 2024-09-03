import VotingSystemEntity, { VotingSystemDocument } from "@/game/entities/voting-system.entity";
import { VotingSystem } from "@/game/models/voting-system.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class VotingSystemService {
	constructor(@InjectModel(VotingSystemEntity.name) private votingSystemModel: Model<VotingSystemDocument>) {}

	public async findById(id: string): Promise<VotingSystem> {
		return this.votingSystemModel.findById(id);
	}

	public async findAll(search?: string): Promise<VotingSystem[]> {
		let votingSystems: VotingSystemDocument[];

		if (search) {
			votingSystems = await this.votingSystemModel
				.find({
					search: { $regex: search, $options: "i" },
				})
				.exec();
		} else {
			votingSystems = await this.votingSystemModel.find().exec();
		}

		return votingSystems.map((votingSystem) => ({
			cards: votingSystem.cards,
			id: votingSystem._id.toString(),
			name: votingSystem.name,
		}));
	}
}
