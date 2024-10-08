import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { fromGlobalId, toGlobalId } from "graphql-relay";
import { Session } from "@/game/decorators/session.decorator";
import { VoteInput } from "@/game/dto/vote.input";
import { AuthGuard } from "@/game/guard/auth-guard";
import { Player } from "@/game/models/player.model";
import { Vote } from "@/game/models/vote.model";
import { NodeIdPipe } from "@/game/pipes/node-id-pipe.service";
import { VoteService } from "@/game/services/vote.service";
import { pubSub } from "@/game/subscriptions/pub-sub";
import { compare } from "@/helpers/compare";
import { DeepPartial } from "@/helpers/deep-partial";

@Resolver(() => Vote)
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}

  @Subscription(() => Vote, {
    filter: (payload, variables) => {
      const vote = fromGlobalId(variables.voteId);
      return compare(vote.id, payload.onNewVote.id);
    },
  })
  public onNewVote(@Args({ name: "voteId", type: () => ID }) _voteId: string) {
    return pubSub.asyncIterator("newVote");
  }

  @UseGuards(AuthGuard)
  @Query(() => Vote)
  public async vote(@Args({ name: "id", type: () => ID }, NodeIdPipe) id: string) {
    return this.voteService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Query(() => Vote)
  public async playerVote(
    @Args({ name: "playerId", type: () => ID }, NodeIdPipe) playerId: string,
    @Args({ name: "votationId", type: () => ID }, NodeIdPipe) votationId: string,
  ): Promise<DeepPartial<Vote>> {
    const data = await this.voteService.playerVotationFindById(playerId, votationId);
    return data;
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Vote)
  public async createVote(@Args("voteInput") { card, votationId }: VoteInput, @Session() viewer: Player) {
    const votation = fromGlobalId(votationId);

    const vote = await this.voteService.createVote({
      card,
      playerId: viewer.id,
      votationId: votation.id,
    });

    await pubSub.publish("newVote", {
      onNewVote: vote,
      votationId: votation.id,
    });

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
    return this.voteService.playerFindById(vote);
  }
}
