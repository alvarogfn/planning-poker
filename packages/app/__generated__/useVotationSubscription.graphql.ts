/**
 * @generated SignedSource<<c7325fd71b289feb84330172f7cfff6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useVotationSubscription$variables = {
  votationId: string;
};
export type useVotationSubscription$data = {
  readonly onUpdatedVotation: {
    readonly id: string;
    readonly revealed: boolean;
    readonly started: boolean;
  };
};
export type useVotationSubscription = {
  response: useVotationSubscription$data;
  variables: useVotationSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "votationId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "votationId",
        "variableName": "votationId"
      }
    ],
    "concreteType": "Votation",
    "kind": "LinkedField",
    "name": "onUpdatedVotation",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useVotationSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useVotationSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4ace2a5f6eb8962d36a78d659e21a05",
    "id": null,
    "metadata": {},
    "name": "useVotationSubscription",
    "operationKind": "subscription",
    "text": "subscription useVotationSubscription(\n  $votationId: ID!\n) {\n  onUpdatedVotation(votationId: $votationId) {\n    id\n    revealed\n    started\n  }\n}\n"
  }
};
})();

(node as any).hash = "b4bdc65529333b5f2a1d4cdd09015926";

export default node;
