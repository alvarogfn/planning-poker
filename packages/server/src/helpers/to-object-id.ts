import { Document, Types } from "mongoose";

type ObjectIdParams =
	Document | number | string | {
			id: string;
	  } | { _id: string; [k: number | string | symbol]: unknown };

export function toObjectId(doc: ObjectIdParams): Types.ObjectId {
	try {
		if (doc instanceof Types.ObjectId) return doc;
		if (typeof doc === "string") return new Types.ObjectId(doc);
		if (typeof doc === "number") return Types.ObjectId.createFromTime(doc);
		if (doc instanceof Document) return new Types.ObjectId(doc._id.toString());
		return new Types.ObjectId(doc.id.toString());
	} catch (error) {
		throw new Error(`Cannot parse value \n${JSON.stringify(doc)}\n to ObjectId, ${error}`);
	}
}
