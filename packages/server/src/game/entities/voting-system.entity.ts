import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { withVirtualId } from "@/helpers/with-virtual-id";

export type VotingSystemDocument = HydratedDocument<VotingSystem>;

@Schema()
export class VotingSystem {
  _id: Types.ObjectId;

  @Prop({ index: "text" })
  name: string;

  @Prop({ raw: [String] })
  cards: string[];
}

const VotingSystemSchema = withVirtualId(SchemaFactory.createForClass(VotingSystem));

export default {
  name: VotingSystem.name,
  schema: VotingSystemSchema,
};
