import { type ForwardedRef, forwardRef } from "react";
import { StyledImage } from "./styles";
import type { ImageProps } from "./types";

function Image(props: ImageProps, ref: ForwardedRef<HTMLImageElement>) {
	return <StyledImage {...props} ref={ref} />;
}

export default forwardRef(Image) as typeof Image;
