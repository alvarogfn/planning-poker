/**
 * @generated SignedSource<<02d36f5f375511aa301b9b4b9c2fe203>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useStartVotationMutation$variables = {
  votationId: string;
};
export type useStartVotationMutation$data = {
  readonly startVotation: {
    readonly id: string;
  };
};
export type useStartVotationMutation = {
  response: useStartVotationMutation$data;
  variables: useStartVotationMutation$variables;
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
    "name": "startVotation",
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
    "name": "useStartVotationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useStartVotationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4c21cd4b1465e8a0468c5d2b792ce628",
    "id": null,
    "metadata": {},
    "name": "useStartVotationMutation",
    "operationKind": "mutation",
    "text": "mutation useStartVotationMutation(\n  $votationId: ID!\n) {\n  startVotation(votationId: $votationId) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc6d231fa7ae60c454ce7ea864be4b23";

export default node;
