import { FieldSelectForm } from "@/components/field-select-form";
import { FieldValues } from "react-hook-form";
import { graphql, useRefetchableFragment } from "react-relay";
import { FieldFormVotingSystemsProps } from "./types";

const VotingSystemFragment = graphql`
	fragment fieldFormVotingSystems on Query
	@refetchable(queryName: "FieldFormVotingSystemRefetchQuery")
	@argumentDefinitions(
		search: {type: "String", defaultValue: ""}
	)
	{
		votingSystems(search: $search) {
				id, name	
		}	
	}
`;

function FieldFormVotingSystems<Form extends FieldValues>({
	fragmentKey,
	...props
}: FieldFormVotingSystemsProps<Form>) {
	const [{ votingSystems }, refetch] = useRefetchableFragment(VotingSystemFragment, fragmentKey);

	const handleInputChange = ({ inputValue = "" }) => {
		refetch({ search: inputValue });
	};

	return (
		<FieldSelectForm
			items={Array.from(votingSystems)}
			itemToString={(item) => item?.name ?? ""}
			onInputValueChange={handleInputChange}
			{...props}
		/>
	);
}

export default FieldFormVotingSystems;
