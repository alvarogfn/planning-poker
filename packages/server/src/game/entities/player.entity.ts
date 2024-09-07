import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { withVirtualId } from "@/helpers/with-virtual-id";

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
	id: string;
	_id: Types.ObjectId;

	@Prop({ default: "" })
	name: string;

	@Prop({ default: false })
	online: boolean;
}

export const PlayerSchema = withVirtualId(SchemaFactory.createForClass(Player));

export default {
	name: Player.name,
	schema: PlayerSchema,
};
