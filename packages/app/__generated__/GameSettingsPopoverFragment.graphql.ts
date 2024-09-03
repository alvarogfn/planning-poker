/**
 * @generated SignedSource<<873c7fc9d205a6695f1d35ce92cd2c67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameSettingsPopoverFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "GameSettingsPopoverFragment";
};
export type GameSettingsPopoverFragment$key = {
  readonly " $data"?: GameSettingsPopoverFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameSettingsPopoverFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GameSettingsPopoverFragment",
  "selections": [
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
};

(node as any).hash = "01c130aba7a0d32a638500762658162c";

export default node;
