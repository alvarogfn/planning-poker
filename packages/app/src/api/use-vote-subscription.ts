import { useVoteSubscription$variables } from "generated/useVoteSubscription.graphql";
import { useMemo } from "react";
import { graphql, useSubscription } from "react-relay";

const useVoteSubscriptionGraphql = graphql`
  subscription useVoteSubscription($voteId: ID!) {
    onNewVote(voteId: $voteId) {
      id
      card
      revealed
      player {
        name
        id
      }
    }
  }
`;

type UseVoteSubscriptionParams = {
  variables: useVoteSubscription$variables;
};

function useVoteSubscription({ variables }: UseVoteSubscriptionParams) {
  const config = useMemo(
    () => ({
      subscription: useVoteSubscriptionGraphql,
      variables: variables,
    }),
    [variables],
  );

  return useSubscription(config);
}

export default useVoteSubscription;
