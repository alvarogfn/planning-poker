import { Votation } from "@/game/models/votation.model";
import { VotationService } from "@/game/services/votation.service";
import { pubSub } from "@/game/subscriptions/pub-sub";
import { Args, ID, Mutation, Parent, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { fromGlobalId, toGlobalId } from "graphql-relay";

@Resolver(() => Votation)
export class VotationResolver {
	constructor(private readonly votationService: VotationService) {}

	@Subscription(() => Votation, {
		filter: (payload, variables) => {
			const { id } = fromGlobalId(variables.votationId);
			return payload.onUpdatedVotation.id === id;
		},
	})
	public async onUpdatedVotation(@Args({ name: "votationId", type: () => ID }) _id: string) {
		return pubSub.asyncIterator("onUpdatedVotation");
	}

	@Mutation(() => Votation)
	public async startVotation(
		@Args({
			name: "votationId",
			type: () => ID,
		})
		votationId: string,
	): Promise<DeepPartial<Votation>> {
		const votation = fromGlobalId(votationId);
		const startedVotation = await this.votationService.startVotation(votation.id);

		await pubSub.publish("onUpdatedVotation", { onUpdatedVotation: startedVotation });

		return startedVotation;
	}

	@Mutation(() => Votation)
	public async revealVotation(
		@Args({
			name: "votationId",
			type: () => ID,
		})
		votationId: string,
	): Promise<DeepPartial<Votation>> {
		const votation = fromGlobalId(votationId);
		const revealedVotation = await this.votationService.revealVotation(votation.id);

		await pubSub.publish("onUpdatedVotation", { onUpdatedVotation: revealedVotation });

		return revealedVotation;
	}

	@ResolveField()
	public async votes(@Parent() votation: Votation) {
		return this.votationService.voteFindAll(votation.id);
	}

	@ResolveField()
	id(@Parent() votation: Votation) {
		return toGlobalId("Votation", votation.id);
	}
}
