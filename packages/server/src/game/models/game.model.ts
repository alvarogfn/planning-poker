import { Player } from "@/game/models/player.model";
import { Votation } from "@/game/models/votation.model";
import { makeMistakable } from "@/helpers/make-mistakable";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "src/node/node.model";
import { VotingSystem } from "./voting-system.model";

@ObjectType({ implements: () => Node })
export class Game extends Node {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => VotingSystem)
	votingSystem: VotingSystem;

	@Field(() => Player)
	createdBy: string;

	@Field(() => Votation)
	currentVotation: Votation;

	@Field(() => [Player])
	players: Player[];
}

export const GameOrMistake = makeMistakable(Game);
export type GameOrMistake = typeof GameOrMistake;
