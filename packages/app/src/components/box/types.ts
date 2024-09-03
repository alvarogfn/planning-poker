import type { SystemProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef } from "react";

type BaseBoxProps = SystemProps & ComponentPropsWithRef<"div">;

export type BoxProps = BaseBoxProps & {
	as?: keyof HTMLElementTagNameMap;
};
