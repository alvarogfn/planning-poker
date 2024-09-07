import { Controller, type FieldValues } from "react-hook-form";
import type { FieldFormProps } from "./types";
import { Field } from "@/components/field";

function FieldForm<Form extends FieldValues>({
  control,
  name,
  ...props
}: FieldFormProps<Form>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field {...props} {...field} value={field.value ?? ""} />
      )}
    />
  );
}

export default FieldForm;
