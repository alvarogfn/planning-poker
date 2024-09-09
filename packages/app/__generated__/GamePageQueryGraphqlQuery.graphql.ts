/**
 * @generated SignedSource<<218c57e5f8824a9d34305b49d3ea37c0>>
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
    readonly __typename: "Game";
    readonly currentVotation: {
      readonly " $fragmentSpreads": FragmentRefs<"GameTableActionsFragment">;
    };
    readonly players: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"GameSettingsPopoverFragment" | "GameViewerDeckFragment" | "GameVotationTableFragment">;
  } | {
    readonly __typename: "Mistake";
    readonly message: string;
    readonly status: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
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
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Player",
  "kind": "LinkedField",
  "name": "players",
  "plural": true,
  "selections": (v4/*: any*/),
  "storageKey": null
},
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
};
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
        "concreteType": null,
        "kind": "LinkedField",
        "name": "game",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GameViewerDeckFragment"
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Votation",
                "kind": "LinkedField",
                "name": "currentVotation",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "GameTableActionsFragment"
                  }
                ],
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
        "concreteType": null,
        "kind": "LinkedField",
        "name": "game",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
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
                  (v3/*: any*/)
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
                  (v3/*: any*/),
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
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "type": "Game",
            "abstractKey": null
          },
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1d54003efe064c880d3bb74ae0d97bae",
    "id": null,
    "metadata": {},
    "name": "GamePageQueryGraphqlQuery",
    "operationKind": "query",
    "text": "query GamePageQueryGraphqlQuery(\n  $id: ID!\n) {\n  game(id: $id) {\n    __typename\n    ... on Game {\n      ...GameViewerDeckFragment\n      players {\n        id\n      }\n      currentVotation {\n        ...GameTableActionsFragment\n        id\n      }\n      ...GameSettingsPopoverFragment\n      ...GameVotationTableFragment\n    }\n    ... on Mistake {\n      message\n      status\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GameSettingsPopoverFragment on Game {\n  name\n}\n\nfragment GameTableActionsFragment on Votation {\n  id\n  started\n  revealed\n}\n\nfragment GameViewerDeckFragment on Game {\n  votingSystem {\n    cards\n    id\n  }\n  currentVotation {\n    id\n    revealed\n    started\n  }\n}\n\nfragment GameVotationTableFragment on Game {\n  players {\n    id\n  }\n  currentVotation {\n    ...GameTableActionsFragment\n    revealed\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5fb6f3ef2019e8b4e2fe90b1bc975ae3";

export default node;
