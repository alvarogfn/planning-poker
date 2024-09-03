import {
	useCreateVoteMutation as MutationType,
	useCreateVoteMutation$variables,
} from "generated/useCreateVoteMutation.graphql";
import { graphql, useMutation } from "react-relay";

const useCreateVoteMutationGraphql = graphql`
  mutation useCreateVoteMutation($card: Int, $votationId: ID!) {
    createVote(voteInput: {card: $card, votationId: $votationId}) {
      id
    }
  }
`;

function useCreateVoteMutation() {
	const [mutation, isLoading] = useMutation<MutationType>(useCreateVoteMutationGraphql);

	const mutate = (variables: useCreateVoteMutation$variables) => {
		mutation({ variables });
	};

	return { mutate, isLoading };
}

export default useCreateVoteMutation;
