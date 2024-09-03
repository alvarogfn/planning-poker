import type { IconType } from "@/icons";
import type { SizeProps } from "@/shared/types";
import type { SystemProps } from "@xstyled/styled-components";
import type { ComponentPropsWithoutRef } from "react";

type BaseIconProps = Omit<SystemProps, SizeProps> & Omit<ComponentPropsWithoutRef<"svg">, "name">;

export type StyledIconProps = BaseIconProps & {
	size?: string | number;
};

export type IconProps = StyledIconProps & {
	name: IconType;
};
