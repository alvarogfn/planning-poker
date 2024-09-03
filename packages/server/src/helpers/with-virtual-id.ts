import { Schema } from "mongoose";

export function withVirtualId<T extends Schema>(schema: T): T {
	schema.virtual("id").get(function () {
		return this._id.toString();
	});

	const transform = (_, ret) => {
		// biome-ignore lint/performance/noDelete:
		delete ret._id;
		// biome-ignore lint/performance/noDelete:
		delete ret.__v;
	};

	schema.set("toObject", {
		virtuals: true,
		transform,
	});

	schema.set("toJSON", {
		virtuals: true,
		transform,
	});

	return schema;
}
