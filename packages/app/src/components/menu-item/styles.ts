import styled, { css, th } from "@xstyled/styled-components";
import type { StyledMenuItemProps } from "./types";
import box from "@/components/box/box";

export const StyledMenuItem = styled(box)<StyledMenuItemProps>`
  padding: 1rem;

  border: 2px solid transparent;

  cursor: pointer;

  transition: border-color 0.2s;

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      border-color: ${th("colors.blue-500")};
    `}
  &:hover {
    background-color: ${th("colors.gray-100")};
  }
`;
