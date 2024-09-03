import { Vote } from "@/game/models/vote.model";
import { makeMistakable } from "@/helpers/make-mistakable";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "src/node/node.model";

@ObjectType({ implements: Node })
export class Votation extends Node {
	@Field(() => ID)
	id: string;

	@Field(() => [Vote])
	votes: [Vote];

	@Field(() => Number)
	card: number;

	@Field(() => Boolean)
	revealed: boolean;

	@Field(() => Boolean)
	started: boolean;
}

export const VotationOrMistake = makeMistakable(Votation);
export type VotationOrMistake = typeof VotationOrMistake;
