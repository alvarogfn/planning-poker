import { useGameUpdateNameMutation } from "@/api/use-game-update-name-mutation";
import { Box } from "@/components/box";
import { FieldForm } from "@/components/field-form";
import Popover from "@/components/popover/popover";
import { Text } from "@/components/text";
import { GameSettingsPopoverFragment$key } from "generated/GameSettingsPopoverFragment.graphql";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useFragment } from "react-relay";
import { useParams } from "react-router-dom";

const GameSettingsPopoverGraphql = graphql`
  fragment GameSettingsPopoverFragment on Game {
    name
  }
`;

type GameSettingsPopoverProps = { fragmentKey?: GameSettingsPopoverFragment$key | null };

function GameSettingsPopover({ fragmentKey }: GameSettingsPopoverProps) {
	const [isOpen, setIsOpen] = useState(false);

	const data = useFragment(GameSettingsPopoverGraphql, fragmentKey);

	const { gameId = "" } = useParams();

	const methods = useForm({
		defaultValues: { name: data?.name },
	});

	useEffect(() => {
		methods.reset({ name: data?.name });
	}, [data?.name, methods.reset]);

	const { mutation, isLoading } = useGameUpdateNameMutation({ gameId });

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleSubmit = (data: any) => {
		setIsOpen(false);
		mutation({ name: data.name });
	};

	return (
		<Popover
			onIsOpenChange={setIsOpen}
			isOpen={isOpen}
			content={
				<Box p="5" boxShadow="2xl" borderRadius="1rem" as="form" onSubmit={methods.handleSubmit(handleSubmit)}>
					<FieldForm disabled={isLoading} labelText="Novo nome" name="name" control={methods.control} />
				</Box>
			}
		>
			<Text
				maxWidth="30rem"
				whiteSpace="nowrap"
				title={data?.name}
				overflow="hidden"
				textOverflow="ellipsis"
				cursor="pointer"
				as="h2"
				fontWeight="bold"
				textStyle="capitalize"
			>
				{data?.name}
			</Text>
		</Popover>
	);
}

export default GameSettingsPopover;
