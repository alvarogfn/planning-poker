import { GameService } from "@/game/services/game.service";
import { VoteService } from "@/game/services/vote.service";
import { Service } from "@/helpers/service.interface";
import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { fromGlobalId } from "graphql-relay";
import { GraphQLError } from "graphql/error";
import { Node } from "src/node/node.model";

@Resolver(() => Node)
export class NodeResolver {
	constructor(
		private gameService: GameService,
		private voteService: VoteService,
	) {}

	private resolvers(type: string): Service<unknown> {
		const services = {
			Game: this.gameService,
			Vote: this.voteService,
		};

		return services[type as keyof typeof services];
	}

	@Query(() => Node, { nullable: true })
	async node(@Args("id", { type: () => ID }) nodeId: string) {
		const { id, type } = fromGlobalId(nodeId);

		let entity = {};

		const resolver = this.resolvers(type);

		if (!resolver) throw new GraphQLError("This ID cannot be parsed into an entity");

		entity = await resolver.findById(id);

		Object.assign(entity, { __typename: type });

		return entity;
	}
}
