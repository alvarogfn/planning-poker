/**
 * @generated SignedSource<<03f614072f51d82020038cc181752164>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthProviderMutation$variables = Record<PropertyKey, never>;
export type AuthProviderMutation$data = {
  readonly signIn: {
    readonly message?: string;
    readonly status?: number;
  };
};
export type AuthProviderMutation = {
  response: AuthProviderMutation$data;
  variables: AuthProviderMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Mistake",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthProviderMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "signIn",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthProviderMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "signIn",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "145805560d0584db9b655733c0a793a1",
    "id": null,
    "metadata": {},
    "name": "AuthProviderMutation",
    "operationKind": "mutation",
    "text": "mutation AuthProviderMutation {\n  signIn {\n    __typename\n    ... on Mistake {\n      status\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e80dc9cca0eb7b595b6c94930e73e58c";

export default node;
