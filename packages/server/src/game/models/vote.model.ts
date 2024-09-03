import { Player } from "@/game/models/player.model";
import { makeMistakable } from "@/helpers/make-mistakable";
import { Field, GraphQLTimestamp, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "src/node/node.model";

@ObjectType({ implements: Node })
export class Vote extends Node {
	@Field(() => ID)
	id: string;

	@Field(() => GraphQLTimestamp)
	votedAt: Date;

	@Field(() => Number)
	card: number;

	@Field(() => Player)
	player: Player;

	@Field(() => Boolean)
	revealed: boolean;
}

export const VoteOrMistake = makeMistakable(Vote);
export type VoteOrMistake = typeof VoteOrMistake;
