/**
 * @generated SignedSource<<9718d3d6b8028731d5fac34e270e3b85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateGameInput = {
  name: string;
  votingSystem: string;
};
export type useCreateGameMutation$variables = {
  createGameInput: CreateGameInput;
};
export type useCreateGameMutation$data = {
  readonly createGame: {
    readonly __typename: "Game";
    readonly id: string;
  } | {
    readonly __typename: "Mistake";
    readonly message: string;
    readonly status: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type useCreateGameMutation = {
  response: useCreateGameMutation$data;
  variables: useCreateGameMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createGameInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "createGameInput",
    "variableName": "createGameInput"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "Game",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Mistake",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateGameMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateGameMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bcf0fa010b1ec59f5b5701301f7a2474",
    "id": null,
    "metadata": {},
    "name": "useCreateGameMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateGameMutation(\n  $createGameInput: CreateGameInput!\n) {\n  createGame(createGameInput: $createGameInput) {\n    __typename\n    ... on Game {\n      id\n    }\n    ... on Mistake {\n      message\n      status\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb6d2da19b38f72b1b703ab4f18e96b2";

export default node;
