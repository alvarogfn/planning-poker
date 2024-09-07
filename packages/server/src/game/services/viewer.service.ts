import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Credentials } from "@/game/models/credentials.model";
import { Player } from "@/game/models/player.model";
import { PlayerService } from "@/game/services/player.service";

@Injectable()
export class ViewerService {
	constructor(
		private readonly playerService: PlayerService,
		private readonly jwtService: JwtService,
	) {}

	public async signUp(name: string): Promise<Partial<Credentials>> {
		const player = await this.playerService.createPlayer(name);

		return {
			accessToken: this.jwtService.sign(player),
			player: player as Player,
		};
	}

	public async signIn(token: string): Promise<Credentials> {
		const auth = this.jwtService.verify(token, { secret: "secret" });
		const player = await this.playerService.findById(auth?.id);

		return {
			accessToken: token,
			player: player as Player,
		};
	}
}
