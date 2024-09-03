import { useMemo } from "react";
import { graphql, useSubscription } from "react-relay";

const useGameUpdatedSubscriptionGraphql = graphql`
  subscription useGameUpdatedSubscription($gameId: ID!) {
    onUpdatedGame(id: $gameId) {
			players {
				id
				name
			}
		}
  }
`;

type UseGameUpdatedSubscriptionParams = {
	gameId: string;
};

function useGameUpdatedSubscription({ gameId }: UseGameUpdatedSubscriptionParams) {
	const config = useMemo(
		() => ({
			subscription: useGameUpdatedSubscriptionGraphql,
			variables: {
				gameId,
			},
		}),
		[gameId],
	);

	return useSubscription(config);
}

export default useGameUpdatedSubscription;
