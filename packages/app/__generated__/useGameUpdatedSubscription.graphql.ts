/**
 * @generated SignedSource<<5beed60f839f6444cb65d469c733d0f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useGameUpdatedSubscription$variables = {
  gameId: string;
};
export type useGameUpdatedSubscription$data = {
  readonly onUpdatedGame: {
    readonly players: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }>;
  };
};
export type useGameUpdatedSubscription = {
  response: useGameUpdatedSubscription$data;
  variables: useGameUpdatedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "gameId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Player",
  "kind": "LinkedField",
  "name": "players",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useGameUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "onUpdatedGame",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useGameUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "onUpdatedGame",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "902ec336ca421047fd6bddb6db98d36f",
    "id": null,
    "metadata": {},
    "name": "useGameUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription useGameUpdatedSubscription(\n  $gameId: ID!\n) {\n  onUpdatedGame(id: $gameId) {\n    players {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "069f5f5e5bec85eb2e3424297377ed9d";

export default node;
