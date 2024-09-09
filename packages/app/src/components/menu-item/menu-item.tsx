import { type ForwardedRef, forwardRef } from "react";
import { StyledMenuItem } from "./styles";
import type { MenuItemProps } from "./types";

function MenuItem({ children, isHighlighted, ...props }: MenuItemProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <StyledMenuItem $isHighlighted={isHighlighted} as="li" ref={ref} {...props}>
      {children}
    </StyledMenuItem>
  );
}

export default forwardRef(MenuItem);
