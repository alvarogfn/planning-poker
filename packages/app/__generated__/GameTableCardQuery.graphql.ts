/**
 * @generated SignedSource<<8b753b1bfe8822b4fc1454e03627c8c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameTableCardQuery$variables = {
  playerId: string;
  votationId: string;
};
export type GameTableCardQuery$data = {
  readonly playerVote: {
    readonly card: number | null | undefined;
    readonly id: string;
    readonly player: {
      readonly name: string;
    };
    readonly revealed: boolean;
  };
};
export type GameTableCardQuery = {
  response: GameTableCardQuery$data;
  variables: GameTableCardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "votationId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "playerId",
    "variableName": "playerId"
  },
  {
    "kind": "Variable",
    "name": "votationId",
    "variableName": "votationId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "card",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "revealed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GameTableCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Vote",
        "kind": "LinkedField",
        "name": "playerVote",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Player",
            "kind": "LinkedField",
            "name": "player",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GameTableCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Vote",
        "kind": "LinkedField",
        "name": "playerVote",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Player",
            "kind": "LinkedField",
            "name": "player",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8c9cbd62b8a9059820798012e224f531",
    "id": null,
    "metadata": {},
    "name": "GameTableCardQuery",
    "operationKind": "query",
    "text": "query GameTableCardQuery(\n  $votationId: ID!\n  $playerId: ID!\n) {\n  playerVote(votationId: $votationId, playerId: $playerId) {\n    id\n    card\n    player {\n      name\n      id\n    }\n    revealed\n  }\n}\n"
  }
};
})();

(node as any).hash = "afce5a4b21d040fec3c09cffb9a0312e";

export default node;
