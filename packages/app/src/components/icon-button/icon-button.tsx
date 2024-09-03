import type { IconButtonProps } from "@/components/icon-button/types";
import { type ComponentType, type ElementType, memo } from "react";
import { Button } from "../button";
import Icon from "../icon/icon";

function IconButton<T extends ComponentType | ElementType>(props: IconButtonProps<T>) {
	return (
		<Button {...props}>
			<Icon name="arrow-up" size="20" />
		</Button>
	);
}

export default memo(IconButton) as typeof IconButton;
