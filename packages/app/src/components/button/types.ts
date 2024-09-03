import { IconType } from "@/icons";
import type { Theme } from "@/providers/theme-provider";
import type { SystemProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef, ComponentType, ElementType, ReactNode } from "react";

export type ButtonVariants = "text" | "condense" | "outline";

export type VariantProps<T extends ComponentType | ElementType> = T extends ComponentType<infer U>
	? U
	: ComponentPropsWithRef<T>;

export type StyledButtonProps<T extends ComponentType | ElementType> = SystemProps<Theme> &
	VariantProps<T> & {
		as?: T;
		variant?: ButtonVariants;
	};

export type ButtonProps<T extends ComponentType | ElementType> = StyledButtonProps<T> & {
	children?: ReactNode;
	left?: IconType;
	right?: IconType;
};
