/**
 * @generated SignedSource<<1e3f17e0d513388858bce858d46aee06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameCardDeckTableFragment$data = {
  readonly currentVotation: {
    readonly id: string;
    readonly revealed: boolean;
    readonly started: boolean;
  };
  readonly votingSystem: {
    readonly cards: ReadonlyArray<number>;
  };
  readonly " $fragmentType": "GameCardDeckTableFragment";
};
export type GameCardDeckTableFragment$key = {
  readonly " $data"?: GameCardDeckTableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameCardDeckTableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GameCardDeckTableFragment",
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
          "name": "started",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "revealed",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};

(node as any).hash = "2387855defc7a5c0fa29283595c52fca";

export default node;
