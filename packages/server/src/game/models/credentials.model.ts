import { Field, ObjectType } from "@nestjs/graphql";
import { Player } from "@/game/models/player.model";
import { makeMistakable } from "@/helpers/make-mistakable";

@ObjectType({})
export class Credentials {
  @Field(() => String)
  accessToken: string;

  @Field(() => Player)
  player: Player;
}

export const CredentialsOrMistake = makeMistakable(Credentials);
export type CredentialsOrMistake = typeof CredentialsOrMistake;
