import { Session } from "@/game/decorators/session.decorator";
import { VoteInput } from "@/game/dto/vote.input";
import { AuthGuard } from "@/game/guard/auth-guard";
import { Player } from "@/game/models/player.model";
import { Vote } from "@/game/models/vote.model";
import { NodeIdPipe } from "@/game/pipes/node-id-pipe.service";
import { VoteService } from "@/game/services/vote.service";
import { pubSub } from "@/game/subscriptions/pub-sub";
import { compare } from "@/helpers/compare";
import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { fromGlobalId, toGlobalId } from "graphql-relay";

@Resolver(() => Vote)
export class VoteResolver {
	constructor(private readonly voteService: VoteService) {}

	@Subscription(() => Vote, {
		filter: (payload, variables) => {
			const votation = fromGlobalId(variables.votationId);
			return compare(votation.id, payload.votationId);
		},
	})
	public async onNewVote(@Args({ name: "votationId", type: () => ID }) _votationId: string) {
		return pubSub.asyncIterator("newVote");
	}

	@UseGuards(AuthGuard)
	@Query(() => Vote)
	public async vote(@Args({ name: "id", type: () => ID }, NodeIdPipe) id: string) {
		return await this.voteService.findById(id);
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Vote)
	public async createVote(@Args("voteInput") { votationId, card }: VoteInput, @Session() viewer: Player) {
		const votation = fromGlobalId(votationId);

		const vote = await this.voteService.createVote({ playerId: viewer.id, votationId: votation.id, card });
		const newVotation = await this.voteService.votationFindById(vote as Vote);

		await pubSub.publish("onUpdatedVotation", { onUpdatedVotation: newVotation });
		await pubSub.publish("newVote", { onNewVote: vote, votationId: votation.id });

		return vote;
	}

	@ResolveField()
	id(@Parent() vote: Vote) {
		return toGlobalId("Vote", vote.id);
	}

	@ResolveField()
	public async revealed(@Parent() vote: Vote): Promise<boolean> {
		const votation = await this.voteService.votationFindById(vote);

		return votation.revealed;
	}

	@ResolveField()
	public async player(@Parent() vote: Vote): Promise<DeepPartial<Player>> {
		return await this.voteService.playerFindById(vote);
	}
}
