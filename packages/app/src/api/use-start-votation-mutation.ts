import {
	useStartVotationMutation as MutationType,
	useStartVotationMutation$variables,
} from "generated/useStartVotationMutation.graphql";
import { graphql, useMutation } from "react-relay";

const useStartVotationMutationGraphql = graphql`
  mutation useStartVotationMutation($votationId: ID!) {
    startVotation(votationId: $votationId) {
      id
    }
  }
`;

function useStartVotationMutation() {
	const [mutation, isLoading] = useMutation<MutationType>(useStartVotationMutationGraphql);

	const mutate = (variables: useStartVotationMutation$variables) => {
		mutation({ variables });
	};

	return { mutate, isLoading };
}

export default useStartVotationMutation;
