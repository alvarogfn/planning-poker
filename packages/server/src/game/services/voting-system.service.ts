import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import VotingSystemEntity, { VotingSystemDocument } from "@/game/entities/voting-system.entity";
import { VotingSystem } from "@/game/models/voting-system.model";
import { DeepPartial } from "@/helpers/deep-partial";

@Injectable()
export class VotingSystemService {
  private readonly logger = new Logger(VotingSystemService.name);

  constructor(
    @InjectModel(VotingSystemEntity.name)
    private readonly votingSystemModel: Model<VotingSystemDocument>,
  ) {}

  public async findById(id: string): Promise<DeepPartial<VotingSystem>> {
    const votingSystem = await this.votingSystemModel.findById(id);

    return Object.assign(votingSystem, {
      cards: votingSystem.cards.sort((a, b) => {
        const someIsNaN = Number.isNaN(Number(a)) || Number.isNaN(Number(b));
        if (someIsNaN) return 1;
        return Number(a) - Number(b);
      }),
    });
  }

  public async findAll(search?: string): Promise<DeepPartial<VotingSystem>[]> {
    const sanitizedSearch = search.replaceAll(/[^\s\w]/gi, "").replace(" ", ".+");

    const filter = sanitizedSearch ? { name: { $options: "i", $regex: sanitizedSearch } } : undefined;

    return this.votingSystemModel.find(filter);
  }
}
