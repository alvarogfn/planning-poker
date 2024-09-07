import { Module } from "@nestjs/common";
import { NodeResolver } from "src/node/node.resolver";
import { GameModule } from "@/game/game.module";

@Module({
	exports: [NodeModule],
	imports: [GameModule],
	providers: [NodeResolver],
})
export class NodeModule {}
