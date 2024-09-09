import { GameSettingsPopoverFragment$key } from "generated/GameSettingsPopoverFragment.graphql";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useFragment } from "react-relay";
import { useParams } from "react-router-dom";
import { useGameUpdateNameMutation } from "@/api/use-game-update-name-mutation";
import { Box } from "@/components/box";
import { FieldForm } from "@/components/field-form";
import { Popover } from "@/components/popover";
import { Text } from "@/components/text";

const GameSettingsPopoverGraphql = graphql`
  fragment GameSettingsPopoverFragment on Game {
    name
  }
`;

type GameSettingsPopoverProps = { game: GameSettingsPopoverFragment$key };

function GameSettingsPopover({ game }: GameSettingsPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const data = useFragment(GameSettingsPopoverGraphql, game);

  const { gameId = "" } = useParams();

  const methods = useForm({
    defaultValues: { name: data?.name },
  });

  useEffect(() => {
    methods.reset({ name: data?.name });
  }, [data?.name, methods.reset]);

  const { isLoading, mutation } = useGameUpdateNameMutation({ gameId });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSubmit = (data: any) => {
    setIsOpen(false);
    mutation({ name: data.name });
  };

  return (
    <Popover
      content={
        <Box as="form" borderRadius="1rem" boxShadow="2xl" onSubmit={methods.handleSubmit(handleSubmit)} p="5">
          <FieldForm control={methods.control} disabled={isLoading} labelText="Novo nome" name="name" />
        </Box>
      }
      isOpen={isOpen}
      onIsOpenChange={setIsOpen}
    >
      <Text
        as="h2"
        cursor="pointer"
        fontWeight="bold"
        maxWidth="30rem"
        overflow="hidden"
        textOverflow="ellipsis"
        textStyle="capitalize"
        title={data?.name}
        whiteSpace="nowrap"
      >
        {data?.name}
      </Text>
    </Popover>
  );
}

export default GameSettingsPopover;
