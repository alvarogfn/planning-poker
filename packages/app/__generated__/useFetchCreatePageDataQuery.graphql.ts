/**
 * @generated SignedSource<<5a235cd333a7d0f9194e8a2f72e5f4ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useFetchCreatePageDataQuery$variables = Record<PropertyKey, never>;
export type useFetchCreatePageDataQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"fieldFormVotingSystems">;
};
export type useFetchCreatePageDataQuery = {
  response: useFetchCreatePageDataQuery$data;
  variables: useFetchCreatePageDataQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useFetchCreatePageDataQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "fieldFormVotingSystems"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useFetchCreatePageDataQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "search",
            "value": ""
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
        "storageKey": "votingSystems(search:\"\")"
      }
    ]
  },
  "params": {
    "cacheID": "a80340afd143c66d0c06fd60d756d7f0",
    "id": null,
    "metadata": {},
    "name": "useFetchCreatePageDataQuery",
    "operationKind": "query",
    "text": "query useFetchCreatePageDataQuery {\n  ...fieldFormVotingSystems\n}\n\nfragment fieldFormVotingSystems on Query {\n  votingSystems(search: \"\") {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "262dd3baa40b2d4647a8230d03073f3b";

export default node;
