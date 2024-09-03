import { Node } from "@/node/node.model";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
	implements: () => Node,
})
export class VotingSystem extends Node {
	@Field(() => ID)
	id: string;

	@Field(() => ID)
	name: string;

	@Field(() => [Number])
	cards: number[];
}
