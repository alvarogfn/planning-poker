/**
 * @generated SignedSource<<60826429a84144ce62894a33e271e72b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GamePageQueryGraphqlQuery$variables = {
  id: string;
};
export type GamePageQueryGraphqlQuery$data = {
  readonly game: {
    readonly message?: string;
    readonly players?: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly status?: number;
    readonly " $fragmentSpreads": FragmentRefs<"GameCardDeckTableFragment" | "GameSettingsPopoverFragment" | "GameVotationTableFragment">;
  };
  readonly viewer: {
    readonly player: {
      readonly id: string;
    };
  };
};
export type GamePageQueryGraphqlQuery = {
  response: GamePageQueryGraphqlQuery$data;
  variables: GamePageQueryGraphqlQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "gameId",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Player",
  "kind": "LinkedField",
  "name": "player",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Mistake",
  "abstractKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GamePageQueryGraphqlQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "game",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Player",
                "kind": "LinkedField",
                "name": "players",
                "plural": true,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GameSettingsPopoverFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GameCardDeckTableFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GameVotationTableFragment"
              }
            ],
            "type": "Game",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GamePageQueryGraphqlQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "game",
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
                "concreteType": "Player",
                "kind": "LinkedField",
                "name": "players",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "VotingSystem",
                "kind": "LinkedField",
                "name": "votingSystem",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cards",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
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
                    "name": "started",
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
                    "concreteType": "Vote",
                    "kind": "LinkedField",
                    "name": "votes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Player",
                        "kind": "LinkedField",
                        "name": "player",
                        "plural": false,
                        "selections": (v8/*: any*/),
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "card",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Game",
            "abstractKey": null
          },
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "977dd13bdae98865b841ceca42aac204",
    "id": null,
    "metadata": {},
    "name": "GamePageQueryGraphqlQuery",
    "operationKind": "query",
    "text": "query GamePageQueryGraphqlQuery(\n  $id: ID!\n) {\n  viewer(gameId: $id) {\n    player {\n      id\n    }\n    id\n  }\n  game(id: $id) {\n    __typename\n    ... on Game {\n      players {\n        id\n      }\n      ...GameSettingsPopoverFragment\n      ...GameCardDeckTableFragment\n      ...GameVotationTableFragment\n    }\n    ... on Mistake {\n      message\n      status\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GameCardDeckTableFragment on Game {\n  votingSystem {\n    cards\n    id\n  }\n  currentVotation {\n    id\n    started\n    revealed\n  }\n}\n\nfragment GameSettingsPopoverFragment on Game {\n  name\n}\n\nfragment GameTableActionsFragment on Votation {\n  id\n  started\n  revealed\n}\n\nfragment GameViewerDeckCardFragment on Vote {\n  player {\n    id\n    name\n  }\n  id\n  card\n}\n\nfragment GameVotationTableFragment on Game {\n  players {\n    name\n    id\n  }\n  currentVotation {\n    ...GameTableActionsFragment\n    revealed\n    id\n    votes {\n      player {\n        id\n      }\n      ...GameViewerDeckCardFragment\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "80dedcb8165a7a4db73cb07979088d0b";

export default node;
