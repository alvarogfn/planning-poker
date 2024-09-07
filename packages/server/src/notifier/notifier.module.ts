import { Module } from "@nestjs/common";
import { NotifierService } from "./notifier.service";

@Module({
	exports: [NotifierService],
	providers: [NotifierService],
})
export class NotifierModule {}
