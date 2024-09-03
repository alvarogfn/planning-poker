import { Box } from "@/components/box";
import { Input } from "@/components/input";
import { type ForwardedRef, forwardRef, memo } from "react";
import { StyledContainer, StyledLabel } from "./styles";
import type { FieldProps } from "./types.ts";

function Field({ labelText, labelProps, ...props }: FieldProps, ref: ForwardedRef<HTMLInputElement>) {
	return (
		<StyledContainer>
			<StyledLabel as="label" {...labelProps}>
				{labelText}
			</StyledLabel>
			<Box>
				<Input ref={ref} {...props} />
			</Box>
		</StyledContainer>
	);
}

export default memo(forwardRef(Field));
