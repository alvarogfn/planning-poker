import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { toGlobalId } from "graphql-relay";
import { ClearCookie } from "@/game/decorators/clear-cookie.decorator";
import { Cookie, ResCookie } from "@/game/decorators/cookie.decorator";
import { Cookies } from "@/game/decorators/cookies.decorator";
import { Session } from "@/game/decorators/session.decorator";
import { AuthGuard } from "@/game/guard/auth-guard";
import { Credentials, SignInCredentials } from "@/game/models/credentials.model";
import { Player } from "@/game/models/player.model";
import { Viewer } from "@/game/models/viewer.model";
import { PlayerService } from "@/game/services/player.service";
import { ViewerService } from "@/game/services/viewer.service";

@Resolver(() => Viewer)
export class ViewerResolver {
	constructor(
		private readonly viewerService: ViewerService,
		private readonly playerService: PlayerService,
		private readonly jwtService: JwtService,
	) {}

	@UseGuards(AuthGuard)
	@Query(() => Viewer)
	async viewer(
		@Args({ name: "gameId", type: () => ID }) gameId: string,
		@Session() session: Player,
	): Promise<DeepPartial<Viewer>> {
		try {
			const player = await this.playerService.findById(session.id);

			return {
				id: player.id,

				player: {
					id: player.id,
					name: player.name,
				},
			};
		} catch {
			throw new UnauthorizedException();
		}
	}

	@Mutation(() => SignInCredentials)
	public async signIn(
		@Cookies("accessToken") token: string,
		@ClearCookie() clearCookie: ClearCookie,
	): Promise<DeepPartial<SignInCredentials>> {
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
				status: 401,
			};
		}
	}

	@Mutation(() => Credentials)
	async signUp(@Args("name", { defaultValue: "" }) name: string, @Cookie() cookie: ResCookie) {
		console.log("name", name);
		const response = await this.viewerService.signUp(name);
		cookie("accessToken", response.accessToken, {
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			httpOnly: true,
			sameSite: "lax",
		});

		return response;
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Player)
	async updateName(@Session() auth: Player, @Args("name") name: string) {
		return this.playerService.updateName(auth.id, name);
	}

	@ResolveField()
	id(@Parent() viewer: Viewer) {
		return toGlobalId("Viewer", viewer.id);
	}
}
