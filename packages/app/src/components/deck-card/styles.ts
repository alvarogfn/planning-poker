import { Button } from "@/components/button";
import styled, { css, th } from "@xstyled/styled-components";
import { Box } from "../box";
import type { DeckCardProps } from "./types";

export const StyledContainer = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledDeckCard = styled(Button)<DeckCardProps>`
  cursor: pointer;

  border-radius: 0.8rem;

  font-size: 1.3rem;

  height: 8rem;
  max-height: 8rem;
  min-height: 8rem;
  width: 4.8rem;
  max-width: 4.8rem;
  min-width: 4.8rem;

  background: ${th("colors.white")};
  border: 2px solid ${th("colors.blue-400")};
  transition: all .09s linear;
  color: ${th("colors.blue-400")};

  ${({ disabled }) =>
		disabled &&
		css`
    color: ${th("colors.gray-500")};
    background-color: ${th("colors.gray-300")};
    border-color: ${th("colors.gray-500")};
  `}

  ${({ isPicked }) =>
		isPicked &&
		css`
    transform: translateY(-5px);
  `}


  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;

  ${({ isPicked }) =>
		isPicked &&
		css`
    border: 2px solid ${th("colors.blue-500")};
    background: ${th("colors.blue-500")};
    color: ${th("colors.white")};
  `}

  ${({ isHidden }) =>
		isHidden &&
		css`
        border: 2px solid ${th("colors.blue-600")};

        background: linear-gradient(180deg, ${th("colors.blue-500")} 0%, ${th("colors.blue-700")} 100%);

        color: ${th("colors.white")};
      `}
`;
