import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import VotationEntity, { VotationDocument } from "@/game/entities/votation.entity";
import VoteEntity, { VoteDocument } from "@/game/entities/vote.entity";
import { Votation } from "@/game/models/votation.model";
import { Vote } from "@/game/models/vote.model";
import { DeepPartial } from "@/helpers/deep-partial";
import { toObjectId } from "@/helpers/to-object-id";
import { MongoID } from "@/helpers/types";

@Injectable()
export class VotationService {
  constructor(
    @InjectModel(VotationEntity.name) private readonly votationModel: Model<VotationDocument>,
    @InjectModel(VoteEntity.name) private readonly voteModel: Model<VoteDocument>,
  ) {}

  public async startVotation(votationId: string): Promise<DeepPartial<Votation>> {
    return this.votationModel.findByIdAndUpdate(toObjectId(votationId), { started: true }, { new: true });
  }

  public async revealVotation(votationId: string): Promise<DeepPartial<Votation>> {
    return this.votationModel.findByIdAndUpdate(toObjectId(votationId), { revealed: true }, { new: true });
  }

  public async findById(id: MongoID): Promise<DeepPartial<Votation>> {
    return this.votationModel.findById(id);
  }

  public async voteFindAll(votationId: string): Promise<DeepPartial<Vote>[]> {
    const votes = await this.voteModel.find({ votation: toObjectId(votationId) });

    return votes.map((vote) => vote.toObject());
  }

  public async findCurrentVotation(gameId: string): Promise<DeepPartial<Votation>> {
    return this.votationModel.findOne({ game: gameId });
  }
}
