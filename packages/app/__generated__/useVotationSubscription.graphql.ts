/**
 * @generated SignedSource<<02814a0b04f32c2a351c5a419c046a58>>
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
    readonly votes: ReadonlyArray<{
      readonly id: string;
    }>;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
      (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Vote",
        "kind": "LinkedField",
        "name": "votes",
        "plural": true,
        "selections": [
          (v1/*: any*/)
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
    "name": "useVotationSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useVotationSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d997dacebc775379e591d97148ee7417",
    "id": null,
    "metadata": {},
    "name": "useVotationSubscription",
    "operationKind": "subscription",
    "text": "subscription useVotationSubscription(\n  $votationId: ID!\n) {\n  onUpdatedVotation(votationId: $votationId) {\n    id\n    revealed\n    started\n    votes {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c97b196528dcc92e3b0d305c79d138d8";

export default node;
