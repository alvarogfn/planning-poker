import { Box } from "@/components/box";
import styled, { th } from "@xstyled/styled-components";

export const StyledContainer = styled(Box)`
  display: grid;
	justify-content: center;
	align-content: center;
	
  grid-template-areas: 
  ". top ."
  "left table right"
  ". bottom .";
	
	grid-template-columns: auto;
	grid-template-rows: auto ;

	gap: 2rem;
	
`;

export const StyledTable = styled(Box)`
	grid-area: table;
	background-color: ${th("colors.blue-300")};
	min-width: 32rem;
	min-height: 16rem;
	width: 100%;
	height: 100%;
	box-shadow: ${th("shadows.xl")};
	border-radius: ${th("radii.3xl")};
  
  display: flex;
  align-items: center;
  justify-content: center;
`;
