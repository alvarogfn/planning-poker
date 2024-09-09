import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Player } from "@/game/models/player.model";
import { Vote } from "@/game/models/vote.model";

@ObjectType()
export class Viewer {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Field(() => Player)
  player: Player;

  @Field(() => Vote, { nullable: true })
  vote?: Vote;
}
