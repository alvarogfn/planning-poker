/**
 * @generated SignedSource<<35b96df1993ca0718b0fde8959d2d85d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useVoteSubscription$variables = {
  voteId: string;
};
export type useVoteSubscription$data = {
  readonly onNewVote: {
    readonly card: number | null | undefined;
    readonly id: string;
    readonly player: {
      readonly id: string;
      readonly name: string;
    };
    readonly revealed: boolean;
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
    "name": "voteId"
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
        "name": "voteId",
        "variableName": "voteId"
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
        "kind": "ScalarField",
        "name": "revealed",
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
    "cacheID": "4b6725c7df9432cd1137c74cb38b020a",
    "id": null,
    "metadata": {},
    "name": "useVoteSubscription",
    "operationKind": "subscription",
    "text": "subscription useVoteSubscription(\n  $voteId: ID!\n) {\n  onNewVote(voteId: $voteId) {\n    id\n    card\n    revealed\n    player {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4a71783536677f89a8bb142a2019616";

export default node;
