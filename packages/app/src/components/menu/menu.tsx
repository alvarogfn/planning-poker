import { type ForwardedRef, forwardRef } from "react";
import { StyledMenu } from "./styles";
import type { MenuProps } from "./types";

function Menu({ children, ...props }: MenuProps, ref: ForwardedRef<HTMLDivElement>) {
	return (
		<StyledMenu ref={ref} {...props} as="ul">
			{children}
		</StyledMenu>
	);
}

export default forwardRef(Menu);
