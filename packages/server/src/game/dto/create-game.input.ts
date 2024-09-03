import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGameInput {
	@Field(() => String)
	name: string;

	@Field(() => ID)
	votingSystem: string;

	createdBy: string;
}
