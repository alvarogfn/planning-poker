import { Box } from "@/components/box";
import Icon from "@/components/icon/icon";
import { IconType } from "@/icons";
import type { ComponentType, ElementType } from "react";
import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

const renderIcon = (icon: IconType) => {
	if (!icon) return null;

	return <Icon size="3rem" name={icon} />;
};

function Button<T extends ComponentType | ElementType = "button">({ children, left, right, ...props }: ButtonProps<T>) {
	return (
		<StyledButton {...props}>
			<Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" flexWrap="noWrap">
				{renderIcon(left)}
				<Box flexGrow={1} ml={left && "-3rem"} mr={right && "-3rem"}>
					{children}
				</Box>
				{renderIcon(right)}
			</Box>
		</StyledButton>
	);
}

export default Button;
