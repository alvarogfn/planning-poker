import { Player } from "@/game/models/player.model";
import { Vote } from "@/game/models/vote.model";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Viewer {
	@Field(() => ID)
	id: string;

	@Field(() => Player)
	player: Player;

	@Field(() => Vote, { nullable: true })
	vote?: Vote;
}
