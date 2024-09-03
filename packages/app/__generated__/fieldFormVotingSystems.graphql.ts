/**
 * @generated SignedSource<<b157ae51bb146c4ed9de984c0f5861af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fieldFormVotingSystems$data = {
  readonly votingSystems: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "fieldFormVotingSystems";
};
export type fieldFormVotingSystems$key = {
  readonly " $data"?: fieldFormVotingSystems$data;
  readonly " $fragmentSpreads": FragmentRefs<"fieldFormVotingSystems">;
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
  "name": "fieldFormVotingSystems",
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

(node as any).hash = "003692933c7846276e9d97ce2f1a9f1a";

export default node;
