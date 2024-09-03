import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { FieldForm } from "@/components/field-form";
import { useSignInMutation } from "@/pages/sign-in/hooks/use-sign-in-mutation";
import { useAuthContext } from "@/providers/AuthProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { StyledForm } from "./styles";

function SignInPage() {
	const methods = useForm<{ name: string }>();
	const { isAuth } = useAuthContext();

	const { mutate } = useSignInMutation();

	const handleSubmit: SubmitHandler<{ name: string }> = ({ name }) => {
		mutate({ name });
	};

	if (isAuth) return <Navigate to="/" />;

	return (
		<Box h="100vh" w="100vw" display="flex" alignItems="center" justifyContent="center">
			<StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
				<FieldForm w="100%" control={methods.control} name="name" labelText="Seu nome" />
				<Button type="submit" variant="condense">
					Jogar
				</Button>
			</StyledForm>
		</Box>
	);
}

export default SignInPage;
