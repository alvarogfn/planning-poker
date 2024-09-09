import { StyledIcon } from "@/components/icon/styles";
import type { IconProps } from "@/components/icon/types";
import icons from "@/icons";

function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];

  return <StyledIcon as={Component} fill="blue-500" size="10rem" {...props} />;
}

export default Icon;
