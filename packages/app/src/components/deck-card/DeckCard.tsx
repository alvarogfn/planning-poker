import { StyledContainer, StyledDeckCard } from "./styles";
import type { DeckCardProps } from "./types";
import { Text } from "@/components/text";

function DeckCard({ children, disabled, isHidden, isPicked, label, ...props }: DeckCardProps) {
  return (
    <StyledContainer>
      <StyledDeckCard disabled={disabled} isHidden={isHidden} isPicked={isPicked} {...props}>
        {!isHidden && children}
      </StyledDeckCard>
      <Text fontSize="1.1rem" fontWeight={700}>
        {label}
      </Text>
    </StyledContainer>
  );
}

export default DeckCard;
