/**
 * @generated SignedSource<<8b048a7c140b3b6d1e431bbeec5fe9d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useSignInMutation$variables = {
  name: string;
};
export type useSignInMutation$data = {
  readonly signUp: {
    readonly __typename: "Mistake";
    readonly message: string;
    readonly status: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type useSignInMutation = {
  response: useSignInMutation$data;
  variables: useSignInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "signUp",
    "plural": false,
    "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
    "name": "useSignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cd42ca0bf8061513da00c7fa37448bfd",
    "id": null,
    "metadata": {},
    "name": "useSignInMutation",
    "operationKind": "mutation",
    "text": "mutation useSignInMutation(\n  $name: String!\n) {\n  signUp(name: $name) {\n    ... on Mistake {\n      status\n      message\n    }\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "d7ad52b11281f47f3b52cbc8b596a11c";

export default node;
