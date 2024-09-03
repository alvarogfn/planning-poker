import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "src/node/node.model";

@ObjectType({
	implements: () => Node,
})
export class Player extends Node {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;
}
