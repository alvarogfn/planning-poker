import { StyledAvatar } from "@/components/avatar/styles";
import type { AvatarProps } from "./types";

const Avatar = ({ size, ...props }: AvatarProps) => {
	return <StyledAvatar w={size} h={size} {...props} />;
};

export default Avatar;
