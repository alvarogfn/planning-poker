import { GameViewerDeckFragment$key } from "generated/GameViewerDeckFragment.graphql";
import { graphql, useFragment } from "react-relay";
import useCreateVoteMutation from "@/api/use-create-vote-mutation";
import { Box } from "@/components/box";
import { DeckCard } from "@/components/deck-card";
import { Text } from "@/components/text";

const GameViewerDeckFragment = graphql`
  fragment GameViewerDeckFragment on Game {
    votingSystem {
      cards
    }
    currentVotation {
      id
      revealed
      started
    }
  }
`;

type GameViewerDeckProps = {
  game: GameViewerDeckFragment$key;
};

function GameViewerDeck({ game }: GameViewerDeckProps) {
  const { currentVotation, votingSystem } = useFragment(GameViewerDeckFragment, game);

  const { id, revealed, started } = currentVotation;
  const { cards } = votingSystem;

  const { mutate } = useCreateVoteMutation();

  return (
    <Box alignItems="center" as="section" display="flex" flexDirection="column" gap="0.8rem" p={5}>
      <Text as="h2" fontWeight="semibold">
        Pegue a sua carta
      </Text>
      <Box display="flex" flexDirection="row" gap="2.5rem" justifyContent="center">
        {cards.map((card) => (
          <DeckCard disabled={!started || revealed} key={card} onClick={() => mutate({ card, votationId: id })}>
            {card}
          </DeckCard>
        ))}
      </Box>
    </Box>
  );
}

export default GameViewerDeck;
