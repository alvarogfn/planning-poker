import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateGameNameInput {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;

	playerId: string;
}
