import {Field, ID, InterfaceType} from "@nestjs/graphql";

@InterfaceType({
  resolveType: (entity) => entity.__typename,
})
export abstract class Node {
  @Field(() => ID)
  id: string;
}
