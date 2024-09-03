import { withVirtualId } from "@/helpers/with-virtual-id";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type VotingSystemDocument = HydratedDocument<VotingSystem>;

@Schema()
export class VotingSystem {
	_id: Types.ObjectId;

	@Prop({ index: "text" })
	name: string;

	@Prop({ raw: [Number] })
	cards: number[];
}

const VotingSystemSchema = withVirtualId(SchemaFactory.createForClass(VotingSystem));

export default {
	schema: VotingSystemSchema,
	name: VotingSystem.name,
};
