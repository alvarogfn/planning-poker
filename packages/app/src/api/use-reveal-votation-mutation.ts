import {
	useRevealVotationMutation as MutationType,
	useRevealVotationMutation$variables,
} from "generated/useRevealVotationMutation.graphql";
import { graphql, useMutation } from "react-relay";

const useRevealVotationMutationGraphql = graphql`
  mutation useRevealVotationMutation($votationId: ID!) {
    revealVotation(votationId: $votationId) {
      id
			revealed
			started
    }
  }
`;

function useRevealVotationMutation() {
	const [mutation, isLoading] = useMutation<MutationType>(useRevealVotationMutationGraphql);

	const mutate = (variables: useRevealVotationMutation$variables) => {
		mutation({ variables });
	};

	return { mutate, isLoading };
}

export default useRevealVotationMutation;
