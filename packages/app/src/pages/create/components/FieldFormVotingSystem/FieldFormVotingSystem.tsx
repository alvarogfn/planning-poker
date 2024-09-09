import { useTransition } from "react";
import { FieldValues } from "react-hook-form";
import { graphql, useRefetchableFragment } from "react-relay";
import { FieldFormVotingSystemProps } from "./types";
import { FieldSelectForm } from "@/components/field-select-form";

const VotingSystemFragment = graphql`
  fragment FieldFormVotingSystems on Query
  @refetchable(queryName: "FieldFormVotingSystemRefetchQuery")
  @argumentDefinitions(search: { type: "String", defaultValue: "" }) {
    votingSystems(search: $search) {
      id
      name
    }
  }
`;

function FieldFormVotingSystem<Form extends FieldValues>({ votingSystems, ...props }: FieldFormVotingSystemProps<Form>) {
  const [isPending, startTransition] = useTransition();

  const [data, refetch] = useRefetchableFragment(VotingSystemFragment, votingSystems);

  const handleInputChange = ({ inputValue = "" }) => {
    startTransition(() => {
      refetch({ search: inputValue });
    });
  };

  return (
    <FieldSelectForm
      isPending={isPending}
      items={Array.from(data.votingSystems)}
      itemToString={(item) => item?.name ?? ""}
      onInputValueChange={handleInputChange}
      {...props}
    />
  );
}

export default FieldFormVotingSystem;
