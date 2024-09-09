import type { FieldProps } from "@/components/field";
import type { MenuProps } from "@/components/menu/types";
import type { SelectProps } from "@/components/select/types";

export type BaseFieldSelectProps<T> = Omit<SelectProps<T>, "items" | "renderInput" | "renderItem" | "renderMenu">;

export type FieldSelectProps<T> = BaseFieldSelectProps<T> & {
  fieldProps?: FieldProps;
  isPending?: boolean;
  items: T[];
  menuProps?: MenuProps;
};
