import { DeckCard } from "@/components/deck-card";
import { GameViewerDeckCardProps } from "@/pages/game/components/game-viewer-deck-card/types";
import { GameViewerDeckCardFragment$key } from "generated/GameViewerDeckCardFragment.graphql";
import { graphql, useFragment } from "react-relay";
import { StyledCard } from "./styles";

const GameViewerDeckCardFragment = graphql`
  fragment GameViewerDeckCardFragment on Vote {
		player {
			id
			name
		}
		id
    card
  }
`;

function GameViewerDeckCard({ gridArea, vote, revealed }: GameViewerDeckCardProps) {
	const data = useFragment<GameViewerDeckCardFragment$key>(GameViewerDeckCardFragment, vote);

	const { card, player } = data || {};

	return (
		<StyledCard gridArea={gridArea}>
			<DeckCard isHidden={!revealed} label={player?.name}>
				{card}
			</DeckCard>
		</StyledCard>
	);
}

export default GameViewerDeckCard;
