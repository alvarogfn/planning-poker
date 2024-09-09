/**
 * @generated SignedSource<<8e79592882bf23d2a6586e988deb19a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreatePageQuery$variables = Record<PropertyKey, never>;
export type CreatePageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FieldFormVotingSystems">;
};
export type CreatePageQuery = {
  response: CreatePageQuery$data;
  variables: CreatePageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FieldFormVotingSystems"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CreatePageQuery",
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
    "cacheID": "2495d5a74eae55ea0b824d9ba77a1aad",
    "id": null,
    "metadata": {},
    "name": "CreatePageQuery",
    "operationKind": "query",
    "text": "query CreatePageQuery {\n  ...FieldFormVotingSystems\n}\n\nfragment FieldFormVotingSystems on Query {\n  votingSystems(search: \"\") {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "b7a4c3de4391e63033a3165b033d6dd1";

export default node;
