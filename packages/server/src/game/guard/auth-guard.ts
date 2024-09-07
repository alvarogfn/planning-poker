import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { GraphQLContext } from "@/config/gql.config";
import { AuthService } from "@/game/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(exec: ExecutionContext) {
		const context = GqlExecutionContext.create(exec).getContext<GraphQLContext>();

		const {accessToken} = context.req.cookies;

		try {
			Object.assign(context, { session: await this.authService.decode(accessToken) });
		} catch {
			throw new UnauthorizedException();
		}

		return true;
	}
}
