import useGameUpdatedSubscription from "@/api/use-game-updated-subscription";
import { Box } from "@/components/box";
import GameCardDeckTable from "@/pages/game/components/game-card-deck-table/GameCardDeckTable";
import { GameSettingsPopover } from "@/pages/game/components/game-settings-popover";
import { GameVotationTable } from "@/pages/game/components/game-votation-table";
import { GamePageQueryGraphqlQuery } from "generated/GamePageQueryGraphqlQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Navigate, useParams } from "react-router-dom";

const GamePageQueryGraphql = graphql`
  query GamePageQueryGraphqlQuery($id: ID!) {
		viewer(gameId: $id) {
			player {
				id
			}
		}
    game(id: $id) {
      ...on Game {
				players {
					id
				}
        ...GameSettingsPopoverFragment
        ...GameCardDeckTableFragment
        ...GameVotationTableFragment
      }
      ... on Mistake {
        message
        status
      }
    }
  }
`;

function GamePage() {
	const { gameId = "" } = useParams();

	const data = useLazyLoadQuery<GamePageQueryGraphqlQuery>(GamePageQueryGraphql, {
		id: gameId,
	});

	useGameUpdatedSubscription({ gameId });

	if (data.game.message) return <Navigate to="/404" />;

	return (
		<Box
			display="flex"
			flexDirection="column"
			maxWidth="100%"
			justifyContent="space-between"
			maxHeight="100%"
			w="100vw"
			h="100vh"
			overflow="hidden"
		>
			<Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" p={5} as="header">
				<GameSettingsPopover fragmentKey={data.game} />
			</Box>
			<GameVotationTable fragmentKey={data.game} />
			<GameCardDeckTable fragmentKey={data.game} />
		</Box>
	);
}

export default GamePage;
