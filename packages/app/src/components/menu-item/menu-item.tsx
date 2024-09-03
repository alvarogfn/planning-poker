import { type ForwardedRef, forwardRef } from "react";
import { StyledMenuItem } from "./styles";
import type { MenuItemProps } from "./types";

const MenuItem = ({ children, isHighlighted, ...props }: MenuItemProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<StyledMenuItem as="li" ref={ref} {...props}>
			{children}
		</StyledMenuItem>
	);
};

export default forwardRef(MenuItem);
