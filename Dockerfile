FROM node:22.3.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true

RUN corepack enable

FROM base AS build
COPY . /packages
WORKDIR /packages
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=server --prod /server
RUN pnpm deploy --filter=app --prod /app

FROM base AS server
COPY --from=build /server /server
WORKDIR /server
EXPOSE 3005
CMD ["pnpm", "start:prod"]

FROM base AS app
COPY --from=build /app /app
WORKDIR /app
EXPOSE 3000
CMD [ "serve", "dist" ]
