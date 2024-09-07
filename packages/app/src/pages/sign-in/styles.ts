import styled from "@xstyled/styled-components";
import { Box } from "@/components/box";

export const StyledForm = styled(Box).attrs({ as: "form" })`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  width: calc(100% - 30px);
  max-width: 300px;
`;
