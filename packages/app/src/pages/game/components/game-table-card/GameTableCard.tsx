import { GameTableCardQuery } from "generated/GameTableCardQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import { StyledCard } from "./styles";
import { GameTableCardProps } from "./types";
import { DeckCard } from "@/components/deck-card";
import useVoteSubscription from "@/api/use-vote-subscription";

const GameTableCardQueryGraphql = graphql`
  query GameTableCardQuery($votationId: ID!, $playerId: ID!) {
    playerVote(votationId: $votationId, playerId: $playerId) {
      id
      card
      player {
        name
      }
      revealed
    }
  }
`;

function GameTableCard({ gridArea, playerId, revealed, votationId }: GameTableCardProps) {
  const { playerVote } = useLazyLoadQuery<GameTableCardQuery>(GameTableCardQueryGraphql, { playerId, votationId });

  useVoteSubscription({ variables: { voteId: playerVote.id } });

  const { card, player } = playerVote;

  return (
    <StyledCard gridArea={gridArea}>
      <DeckCard isHidden={!revealed} label={player.name}>
        {card}
      </DeckCard>
    </StyledCard>
  );
}

export default GameTableCard;
