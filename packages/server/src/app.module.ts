import configuration from "@/config/config";
import { MongooseConfigService } from "@/config/database.config";
import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { GqlConfigService } from "src/config/gql.config";
import { GameModule } from "./game/game.module";
import { NodeModule } from "./node/node.module";
import { NotifierModule } from "./notifier/notifier.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule, NotifierModule],
			useClass: MongooseConfigService,
		}),
		GraphQLModule.forRootAsync({
			imports: [ConfigModule, NotifierModule],
			driver: ApolloDriver,
			useClass: GqlConfigService,
		}),
		NodeModule,
		GameModule,
		NotifierModule,
	],
})
export class AppModule {}
