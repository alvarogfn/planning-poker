import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {VotingSystem} from "@/game/models/voting-system.model";
import VotingSystemEntity, {VotingSystemDocument} from "@/game/entities/voting-system.entity";

@Injectable()
export class VotingSystemService {
  constructor(@InjectModel(VotingSystemEntity.name) private readonly votingSystemModel: Model<VotingSystemDocument>) {
  }

  public async findById(id: string): Promise<DeepPartial<VotingSystem>> {
    return this.votingSystemModel.findById(id).sort({cards: 'asc'});
  }

  public async findAll(search?: string): Promise<VotingSystem[]> {
    let votingSystems: VotingSystemDocument[];

    const sanitizedSearch = search.replaceAll(/[^\s\w]/gi, '').replace(" ", '.+');

    if (sanitizedSearch) {
      this.votingSystemModel
          .find({
            search: {$options: "i", $regex: sanitizedSearch},
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
