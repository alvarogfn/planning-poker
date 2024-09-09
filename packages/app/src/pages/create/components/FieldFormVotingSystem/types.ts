import { FieldFormVotingSystems$data, FieldFormVotingSystems$key } from "generated/FieldFormVotingSystems.graphql";
import { FieldValues } from "react-hook-form";
import { FieldSelectFormProps } from "@/components/field-select-form";

type FieldFormVotingSystemItem = FieldFormVotingSystems$data["votingSystems"][number];

export type FieldFormVotingSystemProps<Form extends FieldValues> = Omit<
  FieldSelectFormProps<FieldFormVotingSystemItem, Form>,
  "items" | "itemToString"
> & {
  votingSystems: FieldFormVotingSystems$key;
};
