FROM node:22.3.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV LEFTHOOK=0
ENV CI=true
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=server --prod /prod/server
RUN pnpm deploy --filter=app --prod /prod/app

FROM base AS server
COPY --from=build /packages/server /prod/server
WORKDIR /prod/server
EXPOSE 8000
CMD [ "pnpm", "start" ]

FROM base AS app
COPY --from=build /packages/app /packages/app
WORKDIR /prod/app
EXPOSE 8001
CMD [ "pnpm", "preview" ]
