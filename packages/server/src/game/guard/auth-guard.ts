import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { GraphQLContext } from "@/config/gql.config";
import { AuthService } from "@/game/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly Logger = new Logger(AuthGuard.name);

  constructor(private readonly authService: AuthService) {}

  async canActivate(exec: ExecutionContext) {
    const context = GqlExecutionContext.create(exec).getContext<GraphQLContext>();

    const { accessToken } = context.req.cookies;

    try {
      const session = await this.authService.decode(accessToken);
      Object.assign(context, { session });
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return true;
  }
}
