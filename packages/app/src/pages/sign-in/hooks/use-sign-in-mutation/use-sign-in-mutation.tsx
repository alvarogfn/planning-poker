import { useAuthContext } from "@/providers/AuthProvider";
import { useSignInMutation as MutationType, useSignInMutation$variables } from "generated/useSignInMutation.graphql";
import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { useLocation, useNavigate } from "react-router-dom";

const useSignInMutationGraphql = graphql`
  mutation useSignInMutation($name: String!) {
    signUp(name: $name) {
      player {
				id
				name
			}
    }
  }
`;

function useSignInMutation() {
	const [data, setData] = useState<unknown>(null);
	const [error, setError] = useState<unknown>(null);
	const [mutation, isLoading] = useMutation<MutationType>(useSignInMutationGraphql);
	const { state } = useLocation();
	const { setIsAuth } = useAuthContext();
	const navigate = useNavigate();

	const mutate = (variables: useSignInMutation$variables) => {
		return mutation({
			variables,
			onError: (data) => {
				setError(data);
				navigate({ search: "?error=1" });
				setIsAuth(false);
			},
			onCompleted: (data) => {
				setData(data);
				navigate(state?.redirectTo || "/");
				setIsAuth(true);
			},
		});
	};

	return { mutate, isLoading, data, error };
}

export default useSignInMutation;
