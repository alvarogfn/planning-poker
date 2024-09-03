/**
 * @generated SignedSource<<7647af813a109ed0a8e2987e0f45dba2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useNewVotationMutation$variables = {
  gameId: string;
};
export type useNewVotationMutation$data = {
  readonly newVotation: {
    readonly currentVotation?: {
      readonly id: string;
      readonly revealed: boolean;
      readonly started: boolean;
    };
  };
};
export type useNewVotationMutation = {
  response: useNewVotationMutation$data;
  variables: useNewVotationMutation$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Votation",
      "kind": "LinkedField",
      "name": "currentVotation",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "revealed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "started",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useNewVotationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "newVotation",
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
    "name": "useNewVotationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "newVotation",
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
    "cacheID": "dfecea279432d7b7b6b1adf5b3ec2164",
    "id": null,
    "metadata": {},
    "name": "useNewVotationMutation",
    "operationKind": "mutation",
    "text": "mutation useNewVotationMutation(\n  $gameId: ID!\n) {\n  newVotation(id: $gameId) {\n    __typename\n    ... on Game {\n      currentVotation {\n        id\n        revealed\n        started\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7cac5e1649732204bdf5ddb4fbc9d08";

export default node;
