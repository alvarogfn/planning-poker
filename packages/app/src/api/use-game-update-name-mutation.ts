import {
	useGameUpdateNameMutation as MutationType,
	useGameUpdateNameMutation$variables,
} from "generated//useGameUpdateNameMutation.graphql";
import { graphql, useMutation } from "react-relay";

const useGameUpdateNameGraphql = graphql`
  mutation useGameUpdateNameMutation($updateGameNameInput: UpdateGameNameInput!) {
    updateGameName(updateGameNameInput: $updateGameNameInput) {
      ...on Game {
        name, id
      }
    }
  }
`;

type UseGameUpdateNameMutationVariables = Omit<useGameUpdateNameMutation$variables["updateGameNameInput"], "id">;

type UseGameUpdateNameMutationParams = { gameId: string };

export function useGameUpdateNameMutation({ gameId }: UseGameUpdateNameMutationParams) {
	const [mutate, isLoading] = useMutation<MutationType>(useGameUpdateNameGraphql);

	const mutation = (variables: UseGameUpdateNameMutationVariables) => {
		mutate({
			variables: { updateGameNameInput: { ...variables, id: gameId } },
		});
	};

	return { mutation, isLoading };
}
