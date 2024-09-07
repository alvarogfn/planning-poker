import { Injectable, OnModuleInit } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { fromGlobalId } from "graphql-relay";
import { Model } from "mongoose";
import GameEntity, { GameDocument } from "@/game/entities/game.entity";
import { PlayerDocument, Player as PlayerEntity } from "@/game/entities/player.entity";
import { pubSub } from "@/game/subscriptions/pub-sub";
import { toObjectId } from "@/helpers/to-object-id";
import { NotifierService } from "@/notifier/notifier.service";

type ConnectionParams = { accessToken: string; location: string };

@Injectable()
export class AuthService implements OnModuleInit {
	constructor(
		private readonly notifierService: NotifierService,
		private readonly jwtService: JwtService,
		@InjectModel(PlayerEntity.name) private readonly playerModel: Model<PlayerDocument>,
		@InjectModel(GameEntity.name) private readonly gameModel: Model<GameDocument>,
	) {}

	public decodeSync<T extends object>(accessToken: string): T {
		return this.jwtService.verify<T>(accessToken);
	}

	private extractGameId(location: string): string | null {
		const gameId = location.split("/")[2];

		if (!gameId) return null;

		const { id } = fromGlobalId(gameId);

		return id;
	}

	public async decode<T extends object>(accessToken: string): Promise<T> {
		return this.jwtService.verifyAsync<T>(accessToken);
	}

	private async updateStatus(data: ConnectionParams) {
		const { id } = await this.decode<{ id: string }>(data.accessToken);

		const gameId = this.extractGameId(data.location);
		if (!gameId) return;

		const updatedGame = await this.gameModel.findByIdAndUpdate(
			toObjectId(gameId),
			{
				$addToSet: {
					players: toObjectId(id),
				},
			},
			{ new: true },
		);

		await pubSub.publish("onUpdatedGame", { onUpdatedGame: updatedGame });
	}

	onModuleInit() {
		this.notifierService.subscribe("onConnect", async (data: ConnectionParams) => this.updateStatus(data));
	}
}
