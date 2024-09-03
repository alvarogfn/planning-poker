import { Injectable, PipeTransform } from "@nestjs/common";
import { fromGlobalId } from "graphql-relay";

@Injectable()
export class NodeIdPipe implements PipeTransform {
	// biome-ignore lint/suspicious/noExplicitAny:
	transform(value: any) {
		return fromGlobalId(value).id;
	}
}
