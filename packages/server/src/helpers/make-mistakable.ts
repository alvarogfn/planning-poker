import { createUnionType } from "@nestjs/graphql";
import { Mistake } from "@/game/models/mistake.model";

type SchemaClass<T> = new () => T;

export function makeMistakable<T>(schemaClass: SchemaClass<T>) {
	return createUnionType({
		name: `${schemaClass.name}OrMistake`,
		resolveType(value) {
			if (value.__typename === "Mistake" || (value.status && value.message)) return Mistake;

			return schemaClass;
		},
		types: () => [schemaClass, Mistake] as const,
	});
}
