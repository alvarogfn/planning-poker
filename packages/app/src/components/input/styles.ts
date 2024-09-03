import styled, { th } from "@xstyled/styled-components";

export const StyledInput = styled.inputBox`

  border: 2px solid ${th("colors.gray-200")};
  border-radius: 0.6rem;

  color: #1a2935;
  font-weight: ${th("fontWeights.normal")};

  font-size: ${th("fontSizes.2xl")};
  
  width: 100%;

  outline: none;

  padding:  0.9rem;

  transition: all .1s;
  
  &:focus {
    border: 2px solid ${th("colors.blue-400")};
    outline: 1px solid ${th("colors.blue-400")};
  }
`;
