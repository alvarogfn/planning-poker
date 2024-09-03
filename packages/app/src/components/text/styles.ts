import styled, { css, th } from "@xstyled/styled-components";
import type { TextProps, TextVariants } from "./types";

const lookupVariants = (as: TextVariants = "p") => {
	const variants = {
		p: css`
    font-size: 1.6rem
  `,
		h1: css`
    font-size: 3rem;
  `,
		h2: css`
			font-size: 2.3rem;
			font-weight: ${th("fontWeights.bold")};
  `,
	};
	return variants[as];
};

export const StyledText = styled.pBox<TextProps>`
 ${({ as }) => lookupVariants(as)};
`;
