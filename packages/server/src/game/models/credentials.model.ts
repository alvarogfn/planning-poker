import { Mistake } from "@/game/models/mistake.model";
import { Player } from "@/game/models/player.model";
import { Field, ObjectType, createUnionType } from "@nestjs/graphql";

@ObjectType({})
export class Credentials {
	@Field(() => String)
	accessToken: string;

	@Field(() => Player)
	player: Player;
}

export const SignInCredentials = createUnionType({
	name: "SignInCredentials",
	types: () => [Credentials, Mistake] as const,
	resolveType(value) {
		if (value.status || value.message) return Mistake;

		return Credentials;
	},
});

export type SignInCredentials = typeof SignInCredentials;
