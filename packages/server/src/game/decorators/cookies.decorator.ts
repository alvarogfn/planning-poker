import { GraphQLContext } from "@/config/gql.config";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const Cookies = createParamDecorator((name, ctx: ExecutionContext) => {
	const req = GqlExecutionContext.create(ctx).getContext<GraphQLContext>().req;
	return req.cookies[name];
});
