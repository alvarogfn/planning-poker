import { GraphQLContext } from "@/config/gql.config";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Response } from "express";

export const Cookie = createParamDecorator<unknown, ExecutionContext, Response["cookie"]>(
	(_, ctx: ExecutionContext) => {
		const response = GqlExecutionContext.create(ctx).getContext<GraphQLContext>().res;
		return response.cookie.bind(response);
	},
);

export type ResCookie = Response["cookie"];
