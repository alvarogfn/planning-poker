import type { useCreateGameMutation as MutationType, useCreateGameMutation$variables } from "generated/useCreateGameMutation.graphql";
import { useState } from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { graphql } from "relay-runtime";
import { Mistake } from "@/types/mistake";

const UseCreateGameMutationGraphql = graphql`
  mutation useCreateGameMutation($createGameInput: CreateGameInput!) {
    createGame(createGameInput: $createGameInput) {
      __typename
      ... on Game {
        id
      }
      ... on Mistake {
        message
        status
      }
    }
  }
`;

export function useCreateGameMutation() {
  const [mistake, setMistake] = useState<Mistake | null>(null);
  const [mutation, isLoading] = useMutation<MutationType>(UseCreateGameMutationGraphql);
  const navigate = useNavigate();

  const mutate = (variables: useCreateGameMutation$variables["createGameInput"]) => {
    mutation({
      onCompleted: ({ createGame }) => {
        if (createGame.__typename === "Mistake") {
          return setMistake(createGame);
        }
        if (createGame.__typename === "Game") {
          return navigate(`/game/${createGame.id}`);
        }
      },
      onError: (error) => {
        setMistake({ message: error.message, status: error.name });
      },
      variables: { createGameInput: variables },
    });
  };

  return { isLoading, mistake, mutate };
}
