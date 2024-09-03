import type { Theme } from "@/providers/theme-provider";
import type { SystemProps, WidthProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef } from "react";
type AvatarBaseProps = Omit<ComponentPropsWithRef<"img"> & SystemProps<Theme>, "width" | "w" | "height" | "h">;

export type AvatarProps = AvatarBaseProps & {
	size?: WidthProps["w"];
};
