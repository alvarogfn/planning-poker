/**
 * @generated SignedSource<<cde8176a0fa9821f43c39049a5d36786>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateGameNameInput = {
  id: string;
  name: string;
};
export type useGameUpdateNameMutation$variables = {
  updateGameNameInput: UpdateGameNameInput;
};
export type useGameUpdateNameMutation$data = {
  readonly updateGameName: {
    readonly id?: string;
    readonly name?: string;
  };
};
export type useGameUpdateNameMutation = {
  response: useGameUpdateNameMutation$data;
  variables: useGameUpdateNameMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "updateGameNameInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "updateGameNameInput",
    "variableName": "updateGameNameInput"
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v2/*: any*/)
  ],
  "type": "Game",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useGameUpdateNameMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateGameName",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "useGameUpdateNameMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateGameName",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d713e71399e0e861b3b6773561640678",
    "id": null,
    "metadata": {},
    "name": "useGameUpdateNameMutation",
    "operationKind": "mutation",
    "text": "mutation useGameUpdateNameMutation(\n  $updateGameNameInput: UpdateGameNameInput!\n) {\n  updateGameName(updateGameNameInput: $updateGameNameInput) {\n    __typename\n    ... on Game {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f93af7c84977f1c254ee2e945f438c6";

export default node;
