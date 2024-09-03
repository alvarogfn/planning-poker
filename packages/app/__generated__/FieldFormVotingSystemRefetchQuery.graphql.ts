/**
 * @generated SignedSource<<8bdf9b9d617bc622508d1668eb303364>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FieldFormVotingSystemRefetchQuery$variables = {
  search?: string | null | undefined;
};
export type FieldFormVotingSystemRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"fieldFormVotingSystems">;
};
export type FieldFormVotingSystemRefetchQuery = {
  response: FieldFormVotingSystemRefetchQuery$data;
  variables: FieldFormVotingSystemRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FieldFormVotingSystemRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "fieldFormVotingSystems"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FieldFormVotingSystemRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "eeffde18d99953d6cee14c7382ef8780",
    "id": null,
    "metadata": {},
    "name": "FieldFormVotingSystemRefetchQuery",
    "operationKind": "query",
    "text": "query FieldFormVotingSystemRefetchQuery(\n  $search: String = \"\"\n) {\n  ...fieldFormVotingSystems_40zwac\n}\n\nfragment fieldFormVotingSystems_40zwac on Query {\n  votingSystems(search: $search) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "003692933c7846276e9d97ce2f1a9f1a";

export default node;
