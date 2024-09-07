import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Response } from "express";
import { GraphQLContext } from "@/config/gql.config";

export const ClearCookie = createParamDecorator<unknown, ExecutionContext, Response["cookie"]>(
	(_, ctx: ExecutionContext) => {
		const response = GqlExecutionContext.create(ctx).getContext<GraphQLContext>().res;
		return response.clearCookie.bind(response);
	},
);

export type ClearCookie = Response["clearCookie"];
