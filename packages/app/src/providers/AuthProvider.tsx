import type { AuthProviderMutation } from "generated/AuthProviderMutation.graphql";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
import { graphql, useMutation } from "react-relay";

type AuthContextProps = {
  isAuth: boolean;
  isAuthenticating: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps | object>({});

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;

const authProviderGraphql = graphql`
  mutation AuthProviderMutation {
    signIn {
      __typename
      ... on Mistake {
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
      onCompleted: (response) => {
        if (response.signIn.__typename === "Mistake") {
          setIsAuth(false);
        } else {
          setIsAuth(true);
        }
      },
      onError: () => {
        setIsAuth(false);
      },
      variables: {},
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isAuthenticating: isAuth ? false : isFetched ? isAuthenticating : true,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
