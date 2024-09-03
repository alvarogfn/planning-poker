import { FloatingOverlay } from "@floating-ui/react";
import styled, { th } from "@xstyled/styled-components";
import { Box } from "../box";

export const StyledOverlay = styled(FloatingOverlay)`
  position: fixed;
  inset: 0;
  display : flex;
  align-items : center; 
  justify-content : center;
  background-color: #00000011;
  box-shadow: ${th("shadows.2xl")};
`;

export const StyledContainer = styled(Box)`
  background-color : ${th("colors.white")};
  padding: ${th("space.10")};
  border-radius: ${th("radii.xl")};
`;
