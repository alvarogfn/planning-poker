import { join } from "node:path";
import { ApolloDriverConfig, ApolloDriverConfigFactory } from "@nestjs/apollo";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request, Response } from "express";
import { Context as WsContext } from "graphql-ws";
import { GraphQLFormattedError } from "graphql/error";
import { NotifierService } from "@/notifier/notifier.service";

type Context = WsContext<Record<string, unknown>, Extra>;

export type GraphQLContext = {
	req: Request;
	res: Response;
};

export type Extra = {
	request: Request;
};

@Injectable()
export class GqlConfigService implements ApolloDriverConfigFactory {
	constructor(
		private readonly configService: ConfigService,
		private readonly notifierService: NotifierService,
	) {}

	private parseCookie(cookies: string): Record<string, string> {
		return cookies
			.split(";")
			.map((v) => v.split("="))
			.reduce((acc, v) => {
				acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
				return acc;
			}, {});
	}

	private formatError(err: GraphQLFormattedError): GraphQLFormattedError {
		const originalError = err.extensions.originalError as { message: string; statusCode: number };

		const NODE_ENV = this.configService.get("NODE_ENV");

		if (NODE_ENV === "development") return err;

		if (!originalError) return err;
		return { extensions: { statusCode: originalError.statusCode }, message: originalError.message };
	}

	private onConnect(context: Context) {
		const cookies = this.parseCookie(context.extra.request.headers.cookie);

		this.notifierService.publish("onConnect", {
			accessToken: cookies.accessToken,
			...context.connectionParams,
		});
	}

	private onDisconnect(context: Context) {
		const cookies = this.parseCookie(context.extra.request.headers.cookie);

		this.notifierService.publish("onDisconnect", {
			accessToken: cookies.accessToken,
			...context.connectionParams,
		});
	}

	public createGqlOptions(): ApolloDriverConfig {
		return {
			autoSchemaFile: join(process.cwd(), "schema.gql"),
			buildSchemaOptions: {
				dateScalarMode: "timestamp",
			},
			context: ({ req, res }) => ({ req, res }),
			formatError: (error) => this.formatError(error),
			sortSchema: true,
			subscriptions: {
				"graphql-ws": {
					onClose: (context) => this.onDisconnect(context as Context),
					onConnect: (context) => this.onConnect(context as Context),
					onDisconnect: (context) => this.onDisconnect(context as Context),
				},
			},
		};
	}
}
