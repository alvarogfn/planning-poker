/**
 * @generated SignedSource<<25ab3a507718f4b52e37948c2a61a260>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useRevealVotationMutation$variables = {
  votationId: string;
};
export type useRevealVotationMutation$data = {
  readonly revealVotation: {
    readonly id: string;
    readonly revealed: boolean;
    readonly started: boolean;
  };
};
export type useRevealVotationMutation = {
  response: useRevealVotationMutation$data;
  variables: useRevealVotationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
        "kind": "Variable",
        "name": "votationId",
        "variableName": "votationId"
      }
    ],
    "concreteType": "Votation",
    "kind": "LinkedField",
    "name": "revealVotation",
    "plural": false,
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
        "name": "revealed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "started",
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
    "name": "useRevealVotationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRevealVotationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2ee70d24a45baa89cd826798ce0d21f4",
    "id": null,
    "metadata": {},
    "name": "useRevealVotationMutation",
    "operationKind": "mutation",
    "text": "mutation useRevealVotationMutation(\n  $votationId: ID!\n) {\n  revealVotation(votationId: $votationId) {\n    id\n    revealed\n    started\n  }\n}\n"
  }
};
})();

(node as any).hash = "abf0d429b1a52d4aedd669b6cc83a186";

export default node;
