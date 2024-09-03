import type { FieldProps } from "@/components/field";
import type { Control, FieldValues, Path } from "react-hook-form";

export type FieldFormProps<Form extends FieldValues> = FieldProps & {
	control: Control<Form>;
	name: Path<Form>;
};
