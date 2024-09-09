import { styled } from "@xstyled/styled-components";
import { Box } from "@/components/box";

export const StyledContainer = styled(Box).attrs({ as: "main" })`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
  max-height: 100%;
`;
export const StyledForm = styled(Box).attrs({ as: "form" })`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  // this hack uses height of the header to calculate the
  // margin-top and center the form on the screen
  margin-top: -80px;

  max-width: 60rem;
  width: calc(100% - 2rem);
  min-width: 30rem;
`;
