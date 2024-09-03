import { Game } from "@/game/entities/game.entity";
import { Vote } from "@/game/entities/vote.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type VotationDocument = mongoose.HydratedDocument<Votation>;

@Schema()
export class Votation {
	id: number;

	@Prop({ type: mongoose.Types.ObjectId, ref: "Game" })
	game: Game;

	@Prop([{ type: mongoose.Types.ObjectId, ref: "Vote" }])
	votes: [Vote];

	@Prop({ type: Boolean, default: false })
	revealed: boolean;

	@Prop({ type: Boolean, default: false })
	started: boolean;
}

const VotationSchema = withVirtualId(SchemaFactory.createForClass(Votation));

export default {
	schema: VotationSchema,
	name: Votation.name,
};
