import { NestFactory } from "@nestjs/core";

import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: {
			origin: [
				"http://localhost:5173",
				"http://192.168.44.1:5173",
				"http://192.168.208.1:5173",
				"http://192.168.100.145:5173",
				"http://172.28.160.1:5173",
			],
			credentials: true,
		},
	});
	app.use(cookieParser());
	await app.listen(3000);

	console.log("Application is running on: http://localhost:3000/graphql");
}
bootstrap();
