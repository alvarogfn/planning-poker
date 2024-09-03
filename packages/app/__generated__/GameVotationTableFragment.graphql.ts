/**
 * @generated SignedSource<<4bbcf6a375d4d6eeca4fe6dc919ddfcc>>
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
    readonly votes: ReadonlyArray<{
      readonly id: string;
      readonly player: {
        readonly id: string;
      };
      readonly " $fragmentSpreads": FragmentRefs<"GameViewerDeckCardFragment">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"GameTableActionsFragment">;
  };
  readonly players: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
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
        (v0/*: any*/),
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
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "GameViewerDeckCardFragment"
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};
})();

(node as any).hash = "cd854b72343b903d24f96efbca475bc4";

export default node;
