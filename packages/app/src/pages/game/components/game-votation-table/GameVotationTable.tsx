import { GameVotationTableFragment$key } from "generated/GameVotationTableFragment.graphql";
import { Suspense, useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { StyledContainer, StyledTable } from "./styles";
import useVotationSubscription from "@/api/use-votation-subscription";
import type { BoxProps } from "@/components/box";
import { DeckCard } from "@/components/deck-card";
import { Icon } from "@/components/icon";
import GameTableActions from "@/pages/game/components/game-table-actions/GameTableActions";
import GameTableCard from "@/pages/game/components/game-table-card/GameTableCard";
import { positionPlayersOnTable, TableSide } from "@/pages/game/hooks/position-players-on-table/position-players-on-table";

const GameVotationTableFragment = graphql`
  fragment GameVotationTableFragment on Game {
    players {
      id
    }
    currentVotation {
      ...GameTableActionsFragment
      revealed
      id
    }
  }
`;

type GameVotationTableProps = BoxProps & {
  game: GameVotationTableFragment$key;
};

function DeckCardLoading() {
  return (
    <DeckCard>
      <Icon name="circle-loading" />
    </DeckCard>
  );
}

function GameVotationTable({ game, ...props }: GameVotationTableProps) {
  const { currentVotation, players } = useFragment(GameVotationTableFragment, game);
  useVotationSubscription({ votationId: currentVotation.id });

  const positions = useMemo(() => positionPlayersOnTable(Array.from(players)), [players]);

  return (
    <StyledContainer alignItems="center" display="flex" justifyContent="center" {...props}>
      {Object.keys(positions).map((position) =>
        positions[position as TableSide].map((player) => (
          <Suspense fallback={<DeckCardLoading />} key={player.id}>
            <GameTableCard gridArea={position} playerId={player.id} revealed={currentVotation.revealed} votationId={currentVotation.id} />
          </Suspense>
        )),
      )}
      <StyledTable>
        <GameTableActions fragmentKey={currentVotation} />
      </StyledTable>
    </StyledContainer>
  );
}

export default GameVotationTable;
