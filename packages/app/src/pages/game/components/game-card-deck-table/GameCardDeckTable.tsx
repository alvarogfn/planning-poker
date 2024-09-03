import useCreateVoteMutation from "@/api/use-create-vote-mutation";
import { Box } from "@/components/box";
import { DeckCard } from "@/components/deck-card";
import { Text } from "@/components/text";
import { GameCardDeckTableFragment$key } from "generated/GameCardDeckTableFragment.graphql";
import { graphql, useFragment } from "react-relay";

const GameCardDeckTableFragment = graphql`
  fragment GameCardDeckTableFragment on Game {
    votingSystem {
      cards
    }
    currentVotation {
			id
      started
			revealed
    }
  }
`;

type GameCardDeckTableProps = {
	fragmentKey: GameCardDeckTableFragment$key;
};

function GameCardDeckTable({ fragmentKey }: GameCardDeckTableProps) {
	const { votingSystem, currentVotation } = useFragment(GameCardDeckTableFragment, fragmentKey);

	const { mutate } = useCreateVoteMutation();

	return (
		<Box as="section" display="flex" gap="0.8rem" flexDirection="column" alignItems="center" p={5}>
			<Text as="h2" fontWeight="semibold">
				Pegue a sua carta
			</Text>
			<Box display="flex" flexDirection="row" gap="2.5rem" justifyContent="center">
				{votingSystem.cards.map((card) => (
					<DeckCard
						onClick={() => mutate({ card, votationId: currentVotation.id })}
						disabled={!currentVotation.started || currentVotation.revealed}
						key={card}
					>
						{card}
					</DeckCard>
				))}
			</Box>
		</Box>
	);
}

export default GameCardDeckTable;
