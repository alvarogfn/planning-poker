import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { fromGlobalId, toGlobalId } from "graphql-relay";
import { VotingSystem } from "@/game/models/voting-system.model";
import { VotingSystemService } from "@/game/services/voting-system.service";

@Resolver(() => VotingSystem)
export class VotingSystemResolver {
	constructor(private readonly votingSystemService: VotingSystemService) {}

	@Query(() => VotingSystem)
	async votingSystem(@Args("id") nodeId: string) {
		const { id } = fromGlobalId(nodeId);

		return this.votingSystemService.findById(id);
	}

	@Query(() => [VotingSystem])
	async votingSystems(@Args("search", { nullable: true }) search?: string) {
		return this.votingSystemService.findAll(search);
	}

	@ResolveField()
	id(@Parent() votingSystem: VotingSystem) {
		return toGlobalId("VotingSystem", votingSystem.id);
	}
}
