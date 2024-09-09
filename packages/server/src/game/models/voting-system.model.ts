import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "@/node/node.model";

@ObjectType({
  implements: () => Node,
})
export class VotingSystem extends Node {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  name: string;

  @Field(() => [String])
  cards: string[];
}
