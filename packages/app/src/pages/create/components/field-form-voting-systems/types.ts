import { FieldSelectFormProps } from "@/components/field-select-form";
import { fieldFormVotingSystems$data, fieldFormVotingSystems$key } from "generated/fieldFormVotingSystems.graphql";
import { FieldValues } from "react-hook-form";

type FieldFormVotingSystemItem = fieldFormVotingSystems$data["votingSystems"][number];

export type FieldFormVotingSystemsProps<Form extends FieldValues> = Omit<
	FieldSelectFormProps<FieldFormVotingSystemItem, Form>,
	"items" | "itemToString"
> & {
	fragmentKey: fieldFormVotingSystems$key;
};
