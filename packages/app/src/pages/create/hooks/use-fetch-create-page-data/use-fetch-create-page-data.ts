import type { useFetchCreatePageDataQuery } from "generated/useFetchCreatePageDataQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

const useCreatePageQueryGraphql = graphql`
  query useFetchCreatePageDataQuery {
    ...fieldFormVotingSystems
  }
`;

export function useFetchCreatePageData() {
	return useLazyLoadQuery<useFetchCreatePageDataQuery>(useCreatePageQueryGraphql, {});
}
