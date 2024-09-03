import { type ForwardedRef, forwardRef } from "react";
import { StyledInput } from "./styles";
import type { InputProps } from "./types.ts";

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	return <StyledInput {...props} ref={ref} />;
}

export default forwardRef(Input);
