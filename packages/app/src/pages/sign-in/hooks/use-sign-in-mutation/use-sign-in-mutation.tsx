import { useSignInMutation as MutationType, useSignInMutation$variables } from "generated/useSignInMutation.graphql";
import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { useLocation, useNavigate } from "react-router-dom";
import { Mistake } from "@/types/mistake";
import { useAuthContext } from "@/providers/AuthProvider";

const useSignInMutationGraphql = graphql`
  mutation useSignInMutation($name: String!) {
    signUp(name: $name) {
      ... on Mistake {
        status
        message
      }
      __typename
    }
  }
`;

function useSignInMutation() {
  const [mistake, setMistake] = useState<Mistake | null>(null);
  const [mutation, isLoading] = useMutation<MutationType>(useSignInMutationGraphql);
  const { state } = useLocation();
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();

  const mutate = (variables: useSignInMutation$variables) =>
    mutation({
      onCompleted: ({ signUp }) => {
        if (signUp.__typename === "Mistake") {
          setMistake({ message: signUp.message, status: signUp.status });
        } else {
          navigate(state?.redirectTo || "/");
          setIsAuth(true);
        }
      },
      onError: (response) => {
        setMistake({ message: response.message, status: response.name });
        setIsAuth(false);
      },
      variables,
    });

  return { error: mistake, isLoading, mutate };
}

export default useSignInMutation;
