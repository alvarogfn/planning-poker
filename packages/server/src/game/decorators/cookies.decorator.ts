import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { GraphQLContext } from "@/config/gql.config";

export const Cookies = createParamDecorator((name, ctx: ExecutionContext) => {
	const {req} = GqlExecutionContext.create(ctx).getContext<GraphQLContext>();
	return req.cookies[name];
});
