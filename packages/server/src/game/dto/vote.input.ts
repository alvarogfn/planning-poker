import { Field, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class VoteInput {
	@Field(() => ID)
	votationId: string;

	@Field(() => Int, { nullable: true })
	card: number | null;

	playerId: string;
}
