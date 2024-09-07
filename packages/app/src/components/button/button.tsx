import type { ComponentType, ElementType } from "react";
import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";
import { Box } from "@/components/box";
import Icon from "@/components/icon/icon";
import { IconType } from "@/icons";

const renderIcon = (icon: IconType) => {
  if (!icon) return null;

  return <Icon name={icon} size="3rem" />;
};

function Button<T extends ComponentType | ElementType = "button">({
  children,
  left,
  right,
  ...props
}: ButtonProps<T>) {
  return (
    <StyledButton {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        flexWrap="noWrap"
        justifyContent="space-between"
      >
        {renderIcon(left)}
        <Box
          alignItems="center"
          display="flex"
          flexGrow={1}
          justifyContent="center"
          ml={left && "-3rem"}
          mr={right && "-3rem"}
        >
          {children}
        </Box>
        {renderIcon(right)}
      </Box>
    </StyledButton>
  );
}

export default Button;
