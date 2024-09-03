import {Text} from "@/components/text";
import {StyledContainer, StyledDeckCard} from "./styles";
import type {DeckCardProps} from "./types";


function DeckCard({children, disabled, isHidden, label, isPicked, ...props}: DeckCardProps) {
  return (
      <StyledContainer>
        <StyledDeckCard isPicked={isPicked} disabled={disabled} isHidden={isHidden} {...props}>
          {!isHidden && children}
        </StyledDeckCard>
        <Text fontSize="1.1rem" fontWeight={700}>
          {label}
        </Text>
      </StyledContainer>
  );
}

export default DeckCard;
