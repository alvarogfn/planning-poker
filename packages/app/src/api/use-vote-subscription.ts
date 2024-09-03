import {useMemo} from "react";
import {graphql, useSubscription} from "react-relay";

const useVoteSubscriptionGraphql = graphql`
  subscription useVoteSubscription($votationId: ID!) {
    onNewVote(votationId: $votationId) {
      id
      card
      player {
        name
        id
      }
    }
  }
`

type UseVoteSubscriptionParams = {
  votationId: string;
}

function useVoteSubscription({votationId}: UseVoteSubscriptionParams) {

  const config = useMemo(
      () => ({
        subscription: useVoteSubscriptionGraphql,
        variables: {
          votationId,
        },
      }),
      [votationId],
  );

  return useSubscription(config);
}

export default useVoteSubscription;
