import { GamePageQueryGraphqlQuery } from "generated/GamePageQueryGraphqlQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Navigate, useParams } from "react-router-dom";
import useGameUpdatedSubscription from "@/api/use-game-updated-subscription";
import { Box } from "@/components/box";
import GameCardDeckTable from "@/pages/game/components/game-card-deck-table/GameCardDeckTable";
import { GameSettingsPopover } from "@/pages/game/components/game-settings-popover";
import { GameVotationTable } from "@/pages/game/components/game-votation-table";

const GamePageQueryGraphql = graphql`
  query GamePageQueryGraphqlQuery($id: ID!) {
    viewer(gameId: $id) {
      player {
        id
      }
    }
    game(id: $id) {
      ... on Game {
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

  const data = useLazyLoadQuery<GamePageQueryGraphqlQuery>(
    GamePageQueryGraphql,
    {
      id: gameId,
    },
  );

  useGameUpdatedSubscription({ gameId });

  if (data.game.message) return <Navigate to="/404" />;

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
      <Box
        alignItems="center"
        as="header"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={5}
      >
        <GameSettingsPopover fragmentKey={data.game} />
      </Box>
      <GameVotationTable fragmentKey={data.game} />
      <GameCardDeckTable fragmentKey={data.game} />
    </Box>
  );
}

export default GamePage;
