import type { Theme } from "@/providers/theme-provider";
import type { TypographyProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef } from "react";

export type TextVariants = "p" | "h1" | "h2";

export type TextProps = TypographyProps<Theme> &
	// biome-ignore lint/suspicious/noExplicitAny: accept anything
	ComponentPropsWithRef<any> & {
		as: TextVariants;
	};
