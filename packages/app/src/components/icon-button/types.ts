import type { ButtonProps } from "@/components/button";
import type { IconProps } from "@/components/icon";
import type { ComponentType, ElementType } from "react";

export type IconButtonProps<T extends ComponentType | ElementType> = ButtonProps<T> & {
	icon: string;
	iconProps: IconProps;
};
