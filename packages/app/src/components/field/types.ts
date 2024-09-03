import type { BoxProps } from "@/components/box";
import type { InputProps } from "@/components/input";

export type FieldProps = Omit<InputProps, "id"> & {
	labelProps?: BoxProps;
	labelText?: string;
};
