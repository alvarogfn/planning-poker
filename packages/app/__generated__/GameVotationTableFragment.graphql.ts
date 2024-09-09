/**
 * @generated SignedSource<<a1196844f58c1eb398c7efca29456556>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GameVotationTableFragment$data = {
  readonly currentVotation: {
    readonly id: string;
    readonly revealed: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"GameTableActionsFragment">;
  };
  readonly players: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly " $fragmentType": "GameVotationTableFragment";
};
export type GameVotationTableFragment$key = {
  readonly " $data"?: GameVotationTableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GameVotationTableFragment">;
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
  "name": "GameVotationTableFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Player",
      "kind": "LinkedField",
      "name": "players",
      "plural": true,
      "selections": [
        (v0/*: any*/)
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "GameTableActionsFragment"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "revealed",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};
})();

(node as any).hash = "e753173c090226a173a914db0bfcadc2";

export default node;
