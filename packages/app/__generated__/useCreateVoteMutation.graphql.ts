/**
 * @generated SignedSource<<cd9df5bcfdf9d5304a34ee0f73598425>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useCreateVoteMutation$variables = {
  card?: number | null | undefined;
  votationId: string;
};
export type useCreateVoteMutation$data = {
  readonly createVote: {
    readonly id: string;
  };
};
export type useCreateVoteMutation = {
  response: useCreateVoteMutation$data;
  variables: useCreateVoteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "card"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "votationId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "card",
            "variableName": "card"
          },
          {
            "kind": "Variable",
            "name": "votationId",
            "variableName": "votationId"
          }
        ],
        "kind": "ObjectValue",
        "name": "voteInput"
      }
    ],
    "concreteType": "Vote",
    "kind": "LinkedField",
    "name": "createVote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateVoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateVoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b8ed66b8b7c6b30ee1c61a1f2d9f3d74",
    "id": null,
    "metadata": {},
    "name": "useCreateVoteMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateVoteMutation(\n  $card: Int\n  $votationId: ID!\n) {\n  createVote(voteInput: {card: $card, votationId: $votationId}) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "56e4488cffbd2087b5b6b54e7558f5f0";

export default node;
