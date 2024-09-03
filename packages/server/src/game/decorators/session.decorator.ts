import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const Session = createParamDecorator((_, ctx: ExecutionContext) => {
	return GqlExecutionContext.create(ctx).getContext().session;
});
