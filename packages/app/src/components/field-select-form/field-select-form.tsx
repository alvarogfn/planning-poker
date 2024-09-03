import { FieldSelect } from "@/components/field-select";
import { Controller, type FieldValues } from "react-hook-form";
import type { FieldSelectFormProps } from "./types";

function FieldSelectForm<Item, Form extends FieldValues>({
	control,
	name,
	...props
}: FieldSelectFormProps<Item, Form>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				return (
					<FieldSelect
						{...props}
						onSelectedItemChange={(changes) => {
							field.onChange(changes.selectedItem);
							props.onSelectedItemChange?.(changes);
						}}
						fieldProps={{
							disabled: field.disabled,
							onBlur: field.onBlur,
							name: field.name,
						}}
						ref={field.ref}
					/>
				);
			}}
		/>
	);
}

export default FieldSelectForm;
