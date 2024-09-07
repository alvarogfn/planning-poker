import { createUnionType, Field, ObjectType } from "@nestjs/graphql";
import { Mistake } from "@/game/models/mistake.model";
import { Player } from "@/game/models/player.model";

@ObjectType({})
export class Credentials {
	@Field(() => String)
	accessToken: string;

	@Field(() => Player)
	player: Player;
}

export const SignInCredentials = createUnionType({
	name: "SignInCredentials",
	resolveType(value) {
		if (value.status || value.message) return Mistake;

		return Credentials;
	},
	types: () => [Credentials, Mistake] as const,
});

export type SignInCredentials = typeof SignInCredentials;
