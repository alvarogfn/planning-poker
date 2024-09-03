import { Player } from "@/game/entities/player.entity";
import { Votation } from "@/game/entities/votation.entity";
import { VotingSystem } from "@/game/entities/voting-system.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type GameDocument = mongoose.HydratedDocument<Game>;

@Schema()
export class Game {
	id: string;

	@Prop()
	name: string;

	@Prop({ type: mongoose.Types.ObjectId, ref: "Player" })
	createdBy: Player;

	@Prop({ type: mongoose.Types.ObjectId, ref: "VotingSystem" })
	votingSystem: VotingSystem;

	@Prop([{ type: mongoose.Types.ObjectId, ref: "Votation" }])
	votations: [Votation];

	@Prop({ type: mongoose.Types.ObjectId, ref: "Votation" })
	currentVotation: Votation;

	@Prop([{ type: mongoose.Types.ObjectId, ref: "Player" }])
	players: [Player];
}

const GameSchema = withVirtualId(SchemaFactory.createForClass(Game));

export default {
	schema: GameSchema,
	name: Game.name,
};
