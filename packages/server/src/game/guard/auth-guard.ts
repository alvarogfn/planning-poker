import { GraphQLContext } from "@/config/gql.config";
import { AuthService } from "@/game/services/auth.service";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService) {}

	async canActivate(exec: ExecutionContext) {
		const context = GqlExecutionContext.create(exec).getContext<GraphQLContext>();

		const accessToken = context.req.cookies.accessToken;

		try {
			Object.assign(context, { session: await this.authService.decode(accessToken) });
		} catch (e) {
			throw new UnauthorizedException();
		}

		return true;
	}
}
