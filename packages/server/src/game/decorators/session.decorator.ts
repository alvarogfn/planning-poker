import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const Session = createParamDecorator((_, ctx: ExecutionContext) => GqlExecutionContext.create(ctx).getContext().session);
