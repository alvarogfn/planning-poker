import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Game } from "@/game/entities/game.entity";
import { Vote } from "@/game/entities/vote.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";

export type VotationDocument = mongoose.HydratedDocument<Votation>;

@Schema()
export class Votation {
	id: number;

	@Prop({ ref: "Game", type: mongoose.Types.ObjectId })
	game: Game;

	@Prop([{ ref: "Vote", type: mongoose.Types.ObjectId }])
	votes: [Vote];

	@Prop({ default: false, type: Boolean })
	revealed: boolean;

	@Prop({ default: false, type: Boolean })
	started: boolean;
}

const VotationSchema = withVirtualId(SchemaFactory.createForClass(Votation));

export default {
	name: Votation.name,
	schema: VotationSchema,
};
