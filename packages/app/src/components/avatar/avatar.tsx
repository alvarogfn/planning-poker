import {StyledAvatar} from "@/components/avatar/styles";
import type {AvatarProps} from "./types";

const Avatar = ({size, ...props}: AvatarProps) => {
  return <StyledAvatar h={size} w={size} {...props} />;
};

export default Avatar;
