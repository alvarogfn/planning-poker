import { StyledText } from "./styles";
import type { TextProps } from "./types";

function Text({ as = "p", ...props }: TextProps) {
	return <StyledText as={as} {...props} />;
}

export default Text;
