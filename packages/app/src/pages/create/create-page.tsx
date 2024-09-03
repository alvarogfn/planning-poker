import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { FieldForm } from "@/components/field-form";
import { useCreateGameMutation } from "@/pages/create/hooks/use-create-game/use-create-game-mutation";
import { useFetchCreatePageData } from "@/pages/create/hooks/use-fetch-create-page-data";
import { type SubmitHandler, useForm } from "react-hook-form";
import { FieldFormVotingSystems } from "./components/field-form-voting-systems";
import { StyledContainer, StyledForm } from "./styles";
import { CreatePageSubmitForm } from "./types";

const CreatePage = () => {
	const fragmentKey = useFetchCreatePageData();

	const methods = useForm<CreatePageSubmitForm>({});

	const { mutate } = useCreateGameMutation();

	const handleSubmit: SubmitHandler<CreatePageSubmitForm> = (value) => {
		mutate({ name: value.name, votingSystem: value.votingSystem.id });
	};

	return (
		<StyledContainer as="main">
			<StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
				<FieldForm name="name" control={methods.control} labelText="Nome da sala" />
				<FieldFormVotingSystems fragmentKey={fragmentKey} name="votingSystem" control={methods.control} />
				<Box mt="10" />
				<Button type="submit" variant="condense">
					Criar Jogo
				</Button>
			</StyledForm>
		</StyledContainer>
	);
};

export default CreatePage;
