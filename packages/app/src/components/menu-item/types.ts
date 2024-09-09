import type { BoxProps } from "@/components/box";

export type StyledMenuItemProps = {
  $isHighlighted?: boolean;
};

export type MenuItemProps = BoxProps &
  Omit<StyledMenuItemProps, "$isHighlighted"> & {
    isHighlighted?: boolean;
  };
