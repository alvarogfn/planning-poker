import { CreatePageQuery } from "generated/CreatePageQuery.graphql";
import { type SubmitHandler, useForm } from "react-hook-form";
import { graphql, useLazyLoadQuery } from "react-relay";
import { StyledContainer, StyledForm } from "./styles";
import { CreatePageSubmitForm } from "./types";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { FieldForm } from "@/components/field-form";
import { Loading } from "@/components/loading";
import { Text } from "@/components/text";
import { FieldFormVotingSystem } from "@/pages/create/components/FieldFormVotingSystem";
import { useCreateGameMutation } from "@/pages/create/hooks/use-create-game/use-create-game-mutation";

const useCreatePageQueryGraphql = graphql`
  query CreatePageQuery {
    ...FieldFormVotingSystems
  }
`;

function CreatePage() {
  const data = useLazyLoadQuery<CreatePageQuery>(useCreatePageQueryGraphql, {});

  const methods = useForm<CreatePageSubmitForm>({});

  const { isLoading, mistake, mutate } = useCreateGameMutation();

  const handleSubmit: SubmitHandler<CreatePageSubmitForm> = (value) => {
    mutate({ name: value.name, votingSystem: value.votingSystem.id });
  };

  return (
    <StyledContainer as="main">
      <StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <FieldForm control={methods.control} labelText="Nome da sala" name="name" />
        <FieldFormVotingSystem control={methods.control} name="votingSystem" votingSystems={data} />
        <Box mt="10" />
        <Button type="submit" variant="condense">
          {isLoading ? <Loading /> : "Criar jogo"}
        </Button>
        {mistake && <Text color="red">{mistake.message}</Text>}
      </StyledForm>
    </StyledContainer>
  );
}

export default CreatePage;
