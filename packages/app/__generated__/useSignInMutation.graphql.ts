/**
 * @generated SignedSource<<ba310d211662d7511c47771e797e8170>>
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
    readonly player: {
      readonly id: string;
      readonly name: string;
    };
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
    "concreteType": "Credentials",
    "kind": "LinkedField",
    "name": "signUp",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "player",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
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
    "cacheID": "d72fefab76dcabb629a7b48acaf40c81",
    "id": null,
    "metadata": {},
    "name": "useSignInMutation",
    "operationKind": "mutation",
    "text": "mutation useSignInMutation(\n  $name: String!\n) {\n  signUp(name: $name) {\n    player {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "62372dbf96d48acf2262a337f3c2e69e";

export default node;
