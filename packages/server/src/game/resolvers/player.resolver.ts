import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { toGlobalId } from "graphql-relay";
import { Player } from "../models/player.model";
import { PlayerService } from "@/game/services/player.service";
import { NodeIdPipe } from "@/game/pipes/node-id-pipe.service";

@Resolver(() => Player)
export class PlayerResolver {
	constructor(private readonly playerService: PlayerService) {}

	@Query(() => Player)
	async player(@Args("id", NodeIdPipe) nodeId: string) {
		return this.playerService.findById(nodeId);
	}

	@ResolveField()
	id(@Parent() player: Player) {
		return toGlobalId("Player", player.id);
	}
}
