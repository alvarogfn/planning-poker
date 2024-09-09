import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { GameResolver } from "src/game/resolvers/game.resolver";
import { GameService } from "./services/game.service";
import { PlayerService } from "./services/player.service";
import GameEntity from "@/game/entities/game.entity";
import PlayerEntity from "@/game/entities/player.entity";
import VotationEntity from "@/game/entities/votation.entity";
import VoteEntity from "@/game/entities/vote.entity";
import VotingSystemEntity from "@/game/entities/voting-system.entity";
import { PlayerResolver } from "@/game/resolvers/player.resolver";
import { ViewerResolver } from "@/game/resolvers/viewer.resolver";
import { VotationResolver } from "@/game/resolvers/votation.resolver";
import { VoteResolver } from "@/game/resolvers/vote.resolver";
import { VotingSystemResolver } from "@/game/resolvers/voting-system.resolver";
import { AuthService } from "@/game/services/auth.service";
import { ViewerService } from "@/game/services/viewer.service";
import { VotationService } from "@/game/services/votation.service";
import { VoteService } from "@/game/services/vote.service";
import { VotingSystemService } from "@/game/services/voting-system.service";
import { NotifierModule } from "@/notifier/notifier.module";

@Module({
  exports: [GameService, PlayerService, VotingSystemService, ViewerService, VoteService, VotationService],
  imports: [
    NotifierModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>("secretKey"),
        signOptions: { expiresIn: "365d" },
      }),
    }),
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: "365d" },
    }),
    MongooseModule.forFeature([PlayerEntity, GameEntity, VotingSystemEntity, VoteEntity, VotationEntity]),
  ],
  providers: [
    GameResolver,
    PlayerResolver,
    GameService,
    PlayerService,
    AuthService,
    VotingSystemService,
    VotingSystemResolver,
    VoteService,
    VoteResolver,
    ViewerResolver,
    ViewerService,
    VotationService,
    VotationResolver,
  ],
})
export class GameModule {}
