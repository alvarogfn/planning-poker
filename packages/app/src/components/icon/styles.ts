import styled from "@xstyled/styled-components";
import type { StyledIconProps } from "./types";

export const StyledIcon = styled.svgBox<StyledIconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
