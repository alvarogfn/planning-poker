import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { StyledForm } from "./styles";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { FieldForm } from "@/components/field-form";
import { Icon } from "@/components/icon";
import { Text } from "@/components/text";
import { useSignInMutation } from "@/pages/sign-in/hooks/use-sign-in-mutation";
import { useAuthContext } from "@/providers/AuthProvider";

function SignInPage() {
  const methods = useForm<{ name: string }>();
  const { isAuth } = useAuthContext();

  const { error, isLoading, mutate } = useSignInMutation();

  const handleSubmit: SubmitHandler<{ name: string }> = ({ name }) => {
    mutate({ name });
  };

  if (isAuth) return <Navigate to="/" />;

  return (
    <Box
      alignItems="center"
      display="flex"
      h="100vh"
      justifyContent="center"
      w="100vw"
    >
      <StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <Text align as="h2">
          Entrar
        </Text>
        <FieldForm
          control={methods.control}
          labelText="Seu nome"
          name="name"
          type="text"
          w="100%"
        />
        <Button h="5rem" type="submit" variant="condense">
          {isLoading ? (
            <Icon fill="white" name="circle-loading" p="-15px" size="2.5rem" />
          ) : (
            "Jogar"
          )}
        </Button>
        {error && <Text color="red">{error.message}</Text>}
      </StyledForm>
    </Box>
  );
}

export default SignInPage;
