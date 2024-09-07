import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { fromGlobalId, toGlobalId } from "graphql-relay";
import { CreateGameInput } from "src/game/dto/create-game.input";
import { Session } from "@/game/decorators/session.decorator";
import { UpdateGameNameInput } from "@/game/dto/update-game-name.input";
import { AuthGuard } from "@/game/guard/auth-guard";
import { Game, GameOrMistake } from "@/game/models/game.model";
import { Player } from "@/game/models/player.model";
import { Votation } from "@/game/models/votation.model";
import { VotingSystem } from "@/game/models/voting-system.model";
import { NodeIdPipe } from "@/game/pipes/node-id-pipe.service";
import { GameService } from "@/game/services/game.service";
import { VotingSystemService } from "@/game/services/voting-system.service";
import { pubSub } from "@/game/subscriptions/pub-sub";

@Resolver(() => Game)
export class GameResolver {
	constructor(
		private readonly gameService: GameService,
		private readonly votingSystemService: VotingSystemService,
	) {}

	@Subscription(() => Game, {
		filter: (payload, variables) => {
			const { id } = fromGlobalId(variables.id);

			return payload.onUpdatedGame.id === id;
		},
	})
	public async onUpdatedGame(@Args({ name: "id", type: () => ID }) _id: string) {
		return pubSub.asyncIterator("onUpdatedGame");
	}

	@UseGuards(AuthGuard)
	@Mutation(() => GameOrMistake)
	public async updateGameName(
		@Args("updateGameNameInput") { id, name }: UpdateGameNameInput,
		@Session() player: Player,
	) {
		try {
			const { id: gameId } = fromGlobalId(id);

			const game = await this.gameService.updateName({ id: gameId, name, playerId: player.id });

			await pubSub.publish("onUpdatedGame", { onUpdatedGame: game });

			return game;
		} catch (error) {
			return {
				message: error.message,
				status: 401,
			};
		}
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Game)
	public async createGame(
		@Args("createGameInput") { name, votingSystem }: CreateGameInput,
		@Session() auth: Player,
	): Promise<DeepPartial<Game>> {
		const { id: votingSystemId } = fromGlobalId(votingSystem);

		return this.gameService.create({ createdBy: auth.id, name, votingSystem: votingSystemId });
	}

	@Query(() => GameOrMistake)
	public async game(@Args({ name: "id", type: () => ID }) id: string): Promise<DeepPartial<GameOrMistake>> {
		try {
			const game = fromGlobalId(id);
			return await this.gameService.findById(game.id);
		} catch {
			return {
				message: "Game not found",
				status: 404,
			};
		}
	}

	@UseGuards(AuthGuard)
	@Mutation(() => GameOrMistake)
	public async newVotation(
		@Args({ name: "id", type: () => ID }, NodeIdPipe) gameId: string,
	): Promise<DeepPartial<GameOrMistake>> {
		try {
			const updatedGame = await this.gameService.newVotation(gameId);

			await pubSub.publish("onUpdatedGame", { onUpdatedGame: updatedGame });

			return updatedGame;
		} catch (error) {
			return {
				message: error.message,
				status: 404,
			};
		}
	}

	// @UseGuards(AuthGuard)
	// @Mutation(() => GameOrMistake)
	// public async addPlayerToGame(
	// 	@Args({ type: () => ID, name: "id" }, NodeIdPipe) id: string,
	// 	@Session() player: Player,
	// ): Promise<DeepPartial<GameOrMistake>> {
	// 	try {
	// 		const updatedGame = await this.gameService.playerAdd(id, player);
	//
	// 		await pubSub.publish("onUpdatedGame", { onUpdatedGame: updatedGame });
	//
	// 		return updatedGame;
	// 	} catch (e) {
	// 		return {
	// 			status: 404,
	// 			message: e.message,
	// 		};
	// 	}
	// }

	@ResolveField()
	public async players(@Parent() game: Game): Promise<DeepPartial<Player>[]> {
		return this.gameService.playerFindAll(game);
	}

	@ResolveField()
	public async votingSystem(@Parent() game: Game): Promise<DeepPartial<VotingSystem> | null> {
		return this.votingSystemService.findById(String(game.votingSystem));
	}

	@ResolveField()
	public async currentVotation(@Parent() game: Game): Promise<DeepPartial<Votation>> {
		return this.gameService.votationFindById(game);
	}

	@ResolveField()
	id(@Parent() game: Game) {
		return toGlobalId("Game", game.id);
	}
}
