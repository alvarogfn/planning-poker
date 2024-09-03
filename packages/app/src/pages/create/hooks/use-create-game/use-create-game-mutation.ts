import type {
	useCreateGameMutation as MutationType,
	useCreateGameMutation$variables,
} from "generated/useCreateGameMutation.graphql";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { graphql } from "relay-runtime";

const UseCreateGameMutationGraphql = graphql`
	mutation useCreateGameMutation($createGameInput: CreateGameInput!) {
		createGame(createGameInput: $createGameInput) {
			id
		}
	}
`;

export function useCreateGameMutation() {
	const [mutation, isLoading] = useMutation<MutationType>(UseCreateGameMutationGraphql);
	const navigate = useNavigate();

	const mutate = (variables: useCreateGameMutation$variables["createGameInput"]) => {
		mutation({
			variables: { createGameInput: variables },
			onCompleted: (response) => {
				navigate(`/game/${response.createGame.id}`);
			},
		});
	};

	return { mutate, isLoading };
}
