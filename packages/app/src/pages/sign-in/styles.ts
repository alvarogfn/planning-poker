import { Box } from "@/components/box";
import styled from "@xstyled/styled-components";

export const StyledForm = styled(Box).attrs({ as: "form" })`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 55vw;
`;
