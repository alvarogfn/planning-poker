/**
 * @generated SignedSource<<e496aec5d76ff3f8f90f79edd99e6349>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FieldFormVotingSystems$data = {
  readonly votingSystems: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "FieldFormVotingSystems";
};
export type FieldFormVotingSystems$key = {
  readonly " $data"?: FieldFormVotingSystems$data;
  readonly " $fragmentSpreads": FragmentRefs<"FieldFormVotingSystems">;
};

import FieldFormVotingSystemRefetchQuery_graphql from './FieldFormVotingSystemRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": FieldFormVotingSystemRefetchQuery_graphql
    }
  },
  "name": "FieldFormVotingSystems",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": "VotingSystem",
      "kind": "LinkedField",
      "name": "votingSystems",
      "plural": true,
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "fa94605c2e7b196c7826aacb2fa547f4";

export default node;
