import { Box } from "@/components/box";
import styled, { th } from "@xstyled/styled-components";

export const StyledLabel = styled(Box)`
  display: flex;
  align-items: center;
  
  border-radius: 4px;
  
  
  font-size: ${th("fontSizes.2xl")};
  font-weight: ${th("fontWeights.bold")};
  
  height: 2rem;
  
  margin-bottom: 0.6rem;
  padding: 0 .8rem;
`;

export const StyledContainer = styled(Box)`
  
`;
