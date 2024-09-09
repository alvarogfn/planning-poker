/**
 * @generated SignedSource<<014617360a2c12e1a367ae78b962e1f2>>
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
  readonly " $fragmentSpreads": FragmentRefs<"FieldFormVotingSystems">;
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
        "name": "FieldFormVotingSystems"
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
    "cacheID": "efcd19851ad74f50dd6ebf3b882017e1",
    "id": null,
    "metadata": {},
    "name": "FieldFormVotingSystemRefetchQuery",
    "operationKind": "query",
    "text": "query FieldFormVotingSystemRefetchQuery(\n  $search: String = \"\"\n) {\n  ...FieldFormVotingSystems_40zwac\n}\n\nfragment FieldFormVotingSystems_40zwac on Query {\n  votingSystems(search: $search) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa94605c2e7b196c7826aacb2fa547f4";

export default node;
