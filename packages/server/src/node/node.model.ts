import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType({
	resolveType: (entity) => {
		return entity.__typename;
	},
})
export abstract class Node {
	@Field((type) => ID)
	id: string;
}
