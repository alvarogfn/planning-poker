/**
 * @generated SignedSource<<6a7220ac183bb38451245d6439ab07d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useVoteSubscription$variables = {
  votationId: string;
};
export type useVoteSubscription$data = {
  readonly onNewVote: {
    readonly card: number;
    readonly id: string;
    readonly player: {
      readonly id: string;
      readonly name: string;
    };
  };
};
export type useVoteSubscription = {
  response: useVoteSubscription$data;
  variables: useVoteSubscription$variables;
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
    "concreteType": "Vote",
    "kind": "LinkedField",
    "name": "onNewVote",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "card",
        "storageKey": null
      },
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
            "name": "name",
            "storageKey": null
          },
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
    "name": "useVoteSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useVoteSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0a288875027d786333ab09b62c9a067a",
    "id": null,
    "metadata": {},
    "name": "useVoteSubscription",
    "operationKind": "subscription",
    "text": "subscription useVoteSubscription(\n  $votationId: ID!\n) {\n  onNewVote(votationId: $votationId) {\n    id\n    card\n    player {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "595292793334073e9a184d17b99a61b7";

export default node;
