import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { toGlobalId } from "graphql-relay";
import { ClearCookie } from "@/game/decorators/clear-cookie.decorator";
import { Cookie, ResCookie } from "@/game/decorators/cookie.decorator";
import { Cookies } from "@/game/decorators/cookies.decorator";
import { Session } from "@/game/decorators/session.decorator";
import { AuthGuard } from "@/game/guard/auth-guard";
import { CredentialsOrMistake } from "@/game/models/credentials.model";
import { Player } from "@/game/models/player.model";
import { Viewer } from "@/game/models/viewer.model";
import { NodeIdPipe } from "@/game/pipes/node-id-pipe.service";
import { PlayerService } from "@/game/services/player.service";
import { ViewerService } from "@/game/services/viewer.service";
import { VoteService } from "@/game/services/vote.service";
import { DeepPartial } from "@/helpers/deep-partial";

@Resolver(() => Viewer)
export class ViewerResolver {
  constructor(
    private readonly viewerService: ViewerService,
    private readonly playerService: PlayerService,
    private readonly voteService: VoteService,
    private readonly jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Query(() => Viewer)
  async viewer(
    @Args({ name: "gameId", nullable: true, type: () => ID }, NodeIdPipe)
    gameId: string,
    @Session() session: Player,
  ): Promise<DeepPartial<Viewer>> {
    try {
      const player = await this.playerService.findById(session.id);
      const vote = await this.playerService.voteFindById(session.id, gameId);

      return {
        id: player.id,
        player: player,
        vote: vote,
      };
    } catch {
      throw new UnauthorizedException();
    }
  }

  @Mutation(() => CredentialsOrMistake)
  public async signIn(
    @Cookies("accessToken") token: string,
    @ClearCookie() clearCookie: ClearCookie,
  ): Promise<DeepPartial<CredentialsOrMistake>> {
    try {
      const data = await this.jwtService.verifyAsync(token);

      const player = await this.playerService.findById(data.id);

      return {
        accessToken: this.jwtService.sign(player),
        player: player,
      };
    } catch {
      clearCookie("accessToken");
      return {
        message: "This token is invalid",
        status: "UNAUTHORIZED",
      };
    }
  }

  @Mutation(() => CredentialsOrMistake)
  async signUp(@Args("name", { defaultValue: "" }) name: string, @Cookie() cookie: ResCookie): Promise<DeepPartial<CredentialsOrMistake>> {
    try {
      const response = await this.viewerService.signUp(name);
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      const nextYear = 1000 * 60 * 60 * 24 * 365;

      cookie("accessToken", response.accessToken, {
        expires: new Date(Date.now() + nextYear),
        httpOnly: true,
        sameSite: "lax",
      });

      return response;
    } catch (error) {
      return {
        message: error.message,
        status: "BAD_REQUEST",
      };
    }
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Player)
  async updateName(@Session() auth: Player, @Args("name") name: string) {
    return this.playerService.updateName(auth.id, name);
  }

  @ResolveField()
  public id(@Parent() viewer: Viewer) {
    return toGlobalId("Viewer", viewer.id);
  }
}
