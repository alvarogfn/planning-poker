import { ButtonProps } from "@/components/button";

export type DeckCardProps = ButtonProps<"button"> & {
	isPicked?: boolean;
	label?: string;
	isHidden?: boolean;
	disabled?: boolean;
};
