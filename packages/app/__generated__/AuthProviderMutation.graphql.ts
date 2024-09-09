/**
 * @generated SignedSource<<4870a3b9c294a8dc1556ad25f53d60fa>>
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
    readonly __typename: "Mistake";
    readonly message: string;
    readonly status: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type AuthProviderMutation = {
  response: AuthProviderMutation$data;
  variables: AuthProviderMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
      {
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthProviderMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthProviderMutation",
    "selections": (v0/*: any*/)
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

(node as any).hash = "f66c718dd6b638e0f23dd6ba5bc12837";

export default node;
