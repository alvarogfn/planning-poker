import { Mistake } from "@/game/models/mistake.model";
import { createUnionType } from "@nestjs/graphql";

type SchemaClass<T> = new () => T;

export function makeMistakable<T>(schemaClass: SchemaClass<T>) {
	return createUnionType({
		name: `${schemaClass.name}OrMistake`,
		types: () => [schemaClass, Mistake] as const,
		resolveType(value) {
			if (value.__typename === "Mistake" || (value.status && value.message)) return Mistake;

			return schemaClass;
		},
	});
}
