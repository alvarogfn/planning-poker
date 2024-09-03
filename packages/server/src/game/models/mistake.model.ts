import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Mistake {
	@Field(() => Int)
	status: number;

	@Field(() => String)
	message: string;
}
