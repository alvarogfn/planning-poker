import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Player } from "@/game/entities/player.entity";
import type { Votation } from "@/game/entities/votation.entity";
import { withVirtualId } from "@/helpers/with-virtual-id";

export type VoteDocument = mongoose.HydratedDocument<Vote>;

@Schema()
export class Vote {
	id: number;

	@Prop({ ref: "Player", type: mongoose.Types.ObjectId })
	player: Player;

	@Prop({ default: null })
	card: number | null;

	@Prop({ ref: "Votation", type: mongoose.Types.ObjectId })
	votation: Votation;
}

const VoteSchema = withVirtualId(SchemaFactory.createForClass(Vote));

export default {
	name: Vote.name,
	schema: VoteSchema,
};
