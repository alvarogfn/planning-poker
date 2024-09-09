import { GamePageQueryGraphqlQuery } from "generated/GamePageQueryGraphqlQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Navigate, useParams } from "react-router-dom";
import { GameSettingsPopover } from "src/pages/game/components/GameSettingsPopover";
import useGameUpdatedSubscription from "@/api/use-game-updated-subscription";
import { Box } from "@/components/box";
import GameViewerDeck from "@/pages/game/components/game-viewer-deck/GameViewerDeck";
import { GameVotationTable } from "@/pages/game/components/game-votation-table";

const GamePageQueryGraphql = graphql`
  query GamePageQueryGraphqlQuery($id: ID!) {
    game(id: $id) {
      __typename
      ... on Game {
        ...GameViewerDeckFragment
        players {
          id
        }
        currentVotation {
          ...GameTableActionsFragment
        }
        ...GameSettingsPopoverFragment
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

  const { game } = useLazyLoadQuery<GamePageQueryGraphqlQuery>(GamePageQueryGraphql, {
    id: gameId,
  });

  useGameUpdatedSubscription({ gameId });

  if (game.__typename !== "Game") return <Navigate to="/404" />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100vh"
      justifyContent="space-between"
      maxHeight="100%"
      maxWidth="100%"
      overflow="hidden"
      w="100vw"
    >
      <Box alignItems="center" as="header" display="flex" flexDirection="row" justifyContent="space-between" p={5}>
        <GameSettingsPopover game={game} />
      </Box>
      <GameVotationTable game={game} />
      <GameViewerDeck game={game} />
    </Box>
  );
}

export default GamePage;
