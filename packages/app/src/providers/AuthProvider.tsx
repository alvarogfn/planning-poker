import type { AuthProviderMutation } from "generated/AuthProviderMutation.graphql";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { graphql, useMutation } from "react-relay";

interface AuthContextProps {
	isAuth: boolean;
	setIsAuth: Dispatch<SetStateAction<boolean>>;
	isAuthenticating: boolean;
}

const AuthContext = createContext<AuthContextProps | object>({});

export const useAuthContext = () => {
	return useContext(AuthContext) as AuthContextProps;
};

const authProviderGraphql = graphql`
	mutation AuthProviderMutation {
		signIn {
			...on Mistake {
				status
				message
			}
		}
	}
`;

function AuthProvider({ children }: PropsWithChildren) {
	const [isAuth, setIsAuth] = useState(false);
	const [isFetched, setIsFetched] = useState(false);
	const [mutate, isAuthenticating] = useMutation<AuthProviderMutation>(authProviderGraphql);

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		setIsFetched(true);
		mutate({
			variables: {},
			onCompleted: (response) => {
				if (response.signIn.status === 401) {
					setIsAuth(false);
				} else {
					setIsAuth(true);
				}
			},
			onError: () => {
				setIsAuth(false);
			},
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isAuthenticating: isAuth ? false : isFetched ? isAuthenticating : true,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
