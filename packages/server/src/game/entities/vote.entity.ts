import { Player } from "@/game/entities/player.entity";
import type { Votation } from "@/game/entities/votation.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type VoteDocument = mongoose.HydratedDocument<Vote>;

@Schema()
export class Vote {
	id: number;

	@Prop({ type: mongoose.Types.ObjectId, ref: "Player" })
	player: Player;

	@Prop({ default: null })
	card: number | null;

	@Prop({ type: mongoose.Types.ObjectId, ref: "Votation" })
	votation: Votation;
}

const VoteSchema = withVirtualId(SchemaFactory.createForClass(Vote));

export default {
	schema: VoteSchema,
	name: Vote.name,
};
