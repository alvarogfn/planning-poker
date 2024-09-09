import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import GameEntity, { GameDocument } from "@/game/entities/game.entity";
import { PlayerDocument, Player as PlayerEntity } from "@/game/entities/player.entity";
import { Player } from "@/game/models/player.model";
import { Vote } from "@/game/models/vote.model";
import { DeepPartial } from "@/helpers/deep-partial";
import { Service } from "@/helpers/service.interface";
import { toObjectId } from "@/helpers/to-object-id";

@Injectable()
export class PlayerService implements Service<Player> {
  constructor(
    @InjectModel(PlayerEntity.name) private readonly playerModel: Model<PlayerDocument>,
    @InjectModel(GameEntity.name) private readonly gameModel: Model<GameDocument>,
  ) {}

  public async voteFindById(playerId: string, gameId: string): Promise<DeepPartial<Vote>> {
    const game = await this.gameModel.findOne(
      {
        "currentVotation.votes.player": toObjectId(playerId),
        id: toObjectId(gameId),
      },
      { "currentVotation.votes[1]": 1 },
    );

    console.log(game);

    return {};
  }

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
