import type { FieldProps } from "@/components/field";
import type { MenuProps } from "@/components/menu/types";
import type { SelectProps } from "@/components/select/types";

export type BaseFieldSelectProps<T> = Omit<SelectProps<T>, "items" | "renderItem" | "renderInput" | "renderMenu">;

export type FieldSelectProps<T> = BaseFieldSelectProps<T> & {
	fieldProps?: FieldProps;
	menuProps?: MenuProps;
	items: T[];
};
