import useNewVotationMutation from "@/api/use-new-votation-mutation";
import useRevealVotationMutation from "@/api/use-reveal-votation-mutation";
import useStartVotationMutation from "@/api/use-start-votation-mutation";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { GameTableActionsFragment$key } from "generated/GameTableActionsFragment.graphql";
import { useEffect, useState } from "react";

import { graphql, useFragment } from "react-relay";
import { useParams } from "react-router-dom";

const GameTableActionsFragment = graphql`
  fragment GameTableActionsFragment on Votation {
		id
		started
		revealed
  }
`;

type GameTableActionsProps = {
	fragmentKey: GameTableActionsFragment$key;
};

function GameTableActions({ fragmentKey }: GameTableActionsProps) {
	const [showNewRoundButton, setShowNewRoundButton] = useState(false);

	const { gameId = "" } = useParams();

	const { id, started, revealed } = useFragment(GameTableActionsFragment, fragmentKey);

	const { mutate: startVotation } = useStartVotationMutation();
	const { mutate: newVotation } = useNewVotationMutation();
	const { mutate: revealVotation } = useRevealVotationMutation();

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		if (revealed) {
			timeoutId = setTimeout(() => {
				setShowNewRoundButton(true);
			}, 1000);
		}

		return () => clearTimeout(timeoutId);
	}, [revealed]);

	if (!started) {
		return (
			<Button onClick={() => startVotation({ votationId: id })} variant="condense">
				Iniciar
			</Button>
		);
	}

	if (started && !revealed) {
		return (
			<Button onClick={() => revealVotation({ votationId: id })} variant="condense">
				Revelar
			</Button>
		);
	}

	if (showNewRoundButton && revealed) {
		return (
			<Button onClick={() => newVotation({ gameId: gameId })} variant="condense">
				Nova Rodada
			</Button>
		);
	}

	if (!started) return <Box />;
}

export default GameTableActions;
