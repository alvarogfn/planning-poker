/**
 * @generated SignedSource<<0c2c338bfb3c544076d819de58eacccc>>
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
    readonly id: string;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "createGameInput",
        "variableName": "createGameInput"
      }
    ],
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "createGame",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateGameMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateGameMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7ad9eb1536b6c447ba527438e1e0487f",
    "id": null,
    "metadata": {},
    "name": "useCreateGameMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateGameMutation(\n  $createGameInput: CreateGameInput!\n) {\n  createGame(createGameInput: $createGameInput) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "de2eebc8d91f298cc429d14d89a0a5c1";

export default node;
