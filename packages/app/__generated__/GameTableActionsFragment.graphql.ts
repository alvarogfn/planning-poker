/**
 * @generated SignedSource<<fb5ffe9b85a346ff00a675006b18a45c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameTableActionsFragment$data = {
  readonly id: string;
  readonly revealed: boolean;
  readonly started: boolean;
  readonly " $fragmentType": "GameTableActionsFragment";
};
export type GameTableActionsFragment$key = {
  readonly " $data"?: GameTableActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameTableActionsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GameTableActionsFragment",
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
  "type": "Votation",
  "abstractKey": null
};

(node as any).hash = "297891137627ca61041d2e3b5b6e4923";

export default node;
