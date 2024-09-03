import { GraphQLContext } from "@/config/gql.config";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Response } from "express";

export const ClearCookie = createParamDecorator<unknown, ExecutionContext, Response["cookie"]>(
	(_, ctx: ExecutionContext) => {
		const response = GqlExecutionContext.create(ctx).getContext<GraphQLContext>().res;
		return response.clearCookie.bind(response);
	},
);

export type ClearCookie = Response["clearCookie"];
