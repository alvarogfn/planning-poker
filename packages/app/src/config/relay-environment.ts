import {env} from "@/config/env";
import {createClient} from "graphql-ws";
import {
	Environment,
	type FetchFunction,
	GraphQLResponse,
	Network,
	Observable,
	RecordSource,
	Store,
	SubscribeFunction,
} from "relay-runtime";

const HTTP_ENDPOINT = env.API_URL;

const wsClient = createClient({
  url: env.WEBSOCKET_API_URL,
  connectionParams: {
    location: window.location.pathname,
  },
});

const isGraphQLResponse = (value: unknown): value is GraphQLResponse => {
  return Boolean(value && typeof value === "object" && "data" in value && value.data !== null);
};

const subscribe: SubscribeFunction = (operation, variables) => {
  return Observable.create((sink) => {
    return wsClient.subscribe(
        {
          operationName: operation.name,
          query: operation.text!,
          variables,
        },
        {
          next: (value) => {
            if (isGraphQLResponse(value)) {
              sink.next(value);
            } else {
              sink.error(new Error("Invalid GraphQL response"));
            }
          },
          error: sink.error,
          complete: sink.complete,
        },
    );
  });
};

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
    credentials: "include",
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribe),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
