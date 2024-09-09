import { useMemo } from "react";
import { graphql, useSubscription } from "react-relay";

const useVotationSubscriptionGraphql = graphql`
  subscription useVotationSubscription($votationId: ID!) {
    onUpdatedVotation(votationId: $votationId) {
      id
      revealed
      started
    }
  }
`;

type UseVoteSubscriptionParams = {
  votationId: string;
};

function useVotationSubscription({ votationId }: UseVoteSubscriptionParams) {
  const config = useMemo(
    () => ({
      subscription: useVotationSubscriptionGraphql,
      variables: {
        votationId,
      },
    }),
    [votationId],
  );

  return useSubscription(config);
}

export default useVotationSubscription;
