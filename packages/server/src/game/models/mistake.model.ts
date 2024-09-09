import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Mistake {
  @Field(() => String)
  status: string;

  @Field(() => String)
  message: string;
}
