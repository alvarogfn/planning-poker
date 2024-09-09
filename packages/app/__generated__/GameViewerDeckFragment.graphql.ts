/**
 * @generated SignedSource<<ed8b5202517071e3559cf13633451c51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameViewerDeckFragment$data = {
  readonly currentVotation: {
    readonly id: string;
    readonly revealed: boolean;
    readonly started: boolean;
  };
  readonly votingSystem: {
    readonly cards: ReadonlyArray<number>;
  };
  readonly " $fragmentType": "GameViewerDeckFragment";
};
export type GameViewerDeckFragment$key = {
  readonly " $data"?: GameViewerDeckFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameViewerDeckFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GameViewerDeckFragment",
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
        }
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
  ],
  "type": "Game",
  "abstractKey": null
};

(node as any).hash = "0ffaa4f22657c2f252562033bf4c9049";

export default node;
