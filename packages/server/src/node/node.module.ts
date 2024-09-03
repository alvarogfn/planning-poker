import { GameModule } from "@/game/game.module";
import { Module } from "@nestjs/common";
import { NodeResolver } from "src/node/node.resolver";

@Module({
	providers: [NodeResolver],
	imports: [GameModule],
	exports: [NodeModule],
})
export class NodeModule {}
