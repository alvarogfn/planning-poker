import { Controller, type FieldValues } from "react-hook-form";
import type { FieldSelectFormProps } from "./types";
import { FieldSelect } from "@/components/field-select";

function FieldSelectForm<Item, Form extends FieldValues>({ control, name, ...props }: FieldSelectFormProps<Item, Form>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FieldSelect
          {...props}
          fieldProps={{
            disabled: field.disabled,
            name: field.name,
            onBlur: field.onBlur,
          }}
          onSelectedItemChange={(changes) => {
            field.onChange(changes.selectedItem);
            props.onSelectedItemChange?.(changes);
          }}
          ref={field.ref}
        />
      )}
    />
  );
}

export default FieldSelectForm;
