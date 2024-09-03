import styled, { th } from "@xstyled/styled-components";
import { Box } from "../box";

export const StyledMenu = styled(Box)`
  border-radius: ${th("radii.xl")};
  
  background: ${th("colors.white")};
  
  box-shadow: ${th("shadows.xl")};
  
  z-index: 999;
  
  padding: 1rem 0;
  visibility: ${({ visibility }) => visibility};
`;
