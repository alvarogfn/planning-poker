import {
	useNewVotationMutation as MutationType,
	useNewVotationMutation$variables,
} from "generated/useNewVotationMutation.graphql";
import { graphql, useMutation } from "react-relay";

const useNewVotationMutationGraphql = graphql`
  mutation useNewVotationMutation($gameId: ID!) {
    newVotation(id: $gameId) {
      ...on Game {
        currentVotation {
          id
          revealed
          started
        }
      }
    }
  }
`;

function useNewVotationMutation() {
	const [mutation, isLoading] = useMutation<MutationType>(useNewVotationMutationGraphql);

	const mutate = (variables: useNewVotationMutation$variables) => {
		mutation({ variables });
	};

	return { mutate, isLoading };
}

export default useNewVotationMutation;
