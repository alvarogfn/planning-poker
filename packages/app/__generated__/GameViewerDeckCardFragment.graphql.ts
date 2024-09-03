/**
 * @generated SignedSource<<56a55f0ced291238b457c156888d6662>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameViewerDeckCardFragment$data = {
  readonly card: number;
  readonly id: string;
  readonly player: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "GameViewerDeckCardFragment";
};
export type GameViewerDeckCardFragment$key = {
  readonly " $data"?: GameViewerDeckCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameViewerDeckCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GameViewerDeckCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Player",
      "kind": "LinkedField",
      "name": "player",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "card",
      "storageKey": null
    }
  ],
  "type": "Vote",
  "abstractKey": null
};
})();

(node as any).hash = "9a4efcc457420653301c255dc9353d45";

export default node;
