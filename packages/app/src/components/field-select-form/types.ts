import type { FieldSelectProps } from "@/components/field-select";
import type { Control, FieldValues, Path } from "react-hook-form";

export type FieldSelectFormProps<Item, Form extends FieldValues> = FieldSelectProps<Item> & {
	control: Control<Form>;
	name: Path<Form>;
};
