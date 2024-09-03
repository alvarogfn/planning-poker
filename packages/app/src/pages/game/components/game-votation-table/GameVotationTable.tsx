import useVotationSubscription from "@/api/use-votation-subscription";
import useVoteSubscription from "@/api/use-vote-subscription";
import type { BoxProps } from "@/components/box";
import GameTableActions from "@/pages/game/components/game-table-actions/GameTableActions";
import GameViewerDeckCard from "@/pages/game/components/game-viewer-deck-card/GameViewerDeckCard";
import { positionPlayersOnTable } from "@/pages/game/hooks/use-position-players-on-table/use-position-players-on-table";
import { GameVotationTableFragment$key } from "generated/GameVotationTableFragment.graphql";
import { graphql, useFragment } from "react-relay";
import { StyledContainer, StyledTable } from "./styles";

const GameVotationTableFragment = graphql`
  fragment GameVotationTableFragment on Game {
		players {
			name
			id
		}
		currentVotation {
			...GameTableActionsFragment
			revealed
			id
			votes {
				player {
					id
				}
				...GameViewerDeckCardFragment
				id
			}
		}
  }
`;

type GameVotationTableProps = BoxProps & {
	fragmentKey: GameVotationTableFragment$key;
};

function GameVotationTable({ fragmentKey, ...props }: GameVotationTableProps) {
	const { players, currentVotation } = useFragment(GameVotationTableFragment, fragmentKey);

	const { revealed } = currentVotation;

	const votes = currentVotation.votes || [];

	const positions = positionPlayersOnTable(Array.from(players));

	useVotationSubscription({ votationId: currentVotation.id });
	useVoteSubscription({ votationId: currentVotation.id });

	return (
		<StyledContainer display="flex" alignItems="center" justifyContent="center" {...props}>
			{Object.keys(positions).map((position) =>
				positions[position as keyof typeof positions].map((player) => {
					return (
						<GameViewerDeckCard
							revealed={revealed}
							vote={votes.find((vote) => vote.player.id === player.id)}
							gridArea={position}
							key={player.id}
						/>
					);
				}),
			)}
			<StyledTable>
				<GameTableActions fragmentKey={currentVotation} />
			</StyledTable>
		</StyledContainer>
	);
}

export default GameVotationTable;
