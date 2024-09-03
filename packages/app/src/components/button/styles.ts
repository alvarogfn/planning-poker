import styled, { css, th } from "@xstyled/styled-components";
import { StyledButtonProps } from "./types";

const variants = {
	text: css`
    color: ${th("colors.blue-500")};
  `,

	outline: css`
    border: 2px solid ${th("colors.blue-500")};
    color: ${th("colors.blue-500")};
  `,

	condense: css`
    background-color: ${th("colors.blue-500")};
    color: ${th("colors.white")};
    font-weight: ${th("fontWeights.bold")};
  `,
};

export const StyledButton = styled.buttonBox<StyledButtonProps<"button">>`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: ${th("hairline")};
  
  cursor: pointer;
  
  border-radius: ${th("radii.xl")};
  
  
  ${({ variant }) => variants[variant || "text"]}
  
  &:focus {
    outline: 3px solid ${th("colors.blue-200")};
  }
`;
