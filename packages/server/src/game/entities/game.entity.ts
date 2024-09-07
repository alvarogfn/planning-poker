import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Player } from "@/game/entities/player.entity";
import { Votation } from "@/game/entities/votation.entity";
import { VotingSystem } from "@/game/entities/voting-system.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";

export type GameDocument = mongoose.HydratedDocument<Game>;

@Schema()
export class Game {
	id: string;

	@Prop()
	name: string;

	@Prop({ ref: "Player", type: mongoose.Types.ObjectId })
	createdBy: Player;

	@Prop({ ref: "VotingSystem", type: mongoose.Types.ObjectId })
	votingSystem: VotingSystem;

	@Prop([{ ref: "Votation", type: mongoose.Types.ObjectId }])
	votations: [Votation];

	@Prop({ ref: "Votation", type: mongoose.Types.ObjectId })
	currentVotation: Votation;

	@Prop([{ ref: "Player", type: mongoose.Types.ObjectId }])
	players: [Player];
}

const GameSchema = withVirtualId(SchemaFactory.createForClass(Game));

export default {
	name: Game.name,
	schema: GameSchema,
};
