import { Document, Types } from "mongoose";

type ObjectIdParams =
	| Document
	| { _id: string; [k: string | symbol | number]: unknown }
	| string
	| number
	| {
			id: string;
	  };

export function toObjectId(doc: ObjectIdParams): Types.ObjectId {
	try {
		if (doc instanceof Types.ObjectId) return doc;
		if (typeof doc === "string") return new Types.ObjectId(doc);
		if (typeof doc === "number") return Types.ObjectId.createFromTime(doc);
		if (doc instanceof Document) return new Types.ObjectId(doc._id.toString());
		return new Types.ObjectId(doc.id.toString());
	} catch (e) {
		throw new Error(`Cannot parse value \n${JSON.stringify(doc)}\n to ObjectId, ${e}`);
	}
}
