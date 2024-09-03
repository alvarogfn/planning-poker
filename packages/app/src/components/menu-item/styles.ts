import styled, { th } from "@xstyled/styled-components";
import { Box } from "../box";
import type { StyledMenuItemProps } from "./types";

export const StyledMenuItem = styled(Box)<StyledMenuItemProps>`
  padding: 1rem;
  
  border: 2px solid transparent;
  
  cursor: pointer;
  
  transition: border-color 0.2s;
    
  &:hover {
    background-color: ${th("colors.gray-100")}
  }
`;
