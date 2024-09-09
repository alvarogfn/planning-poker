import type { UseFloatingOptions } from "@floating-ui/react";
import type {
  UseComboboxHighlightedIndexChange,
  UseComboboxInputValueChange,
  UseComboboxIsOpenChange,
  UseComboboxSelectedItemChange,
  UseComboboxStateChange,
} from "downshift";
import type { ForwardedRef, ReactNode } from "react";
import type { RecordKey } from "@/shared/types";

export type SelectRenderInputProps = {
  [k: string]: unknown;
  getInputProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
  getLabelProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
  getToggleButtonProps: (props: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
  inputValue?: string;
  isOpen: boolean;
};

export type SelectRenderMenuProps = {
  [k: string]: unknown;
  children: ReactNode;
  getMenuProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
  isOpen: boolean;
};

export type SelectRenderItemProps<Item> = {
  [k: string]: unknown;
  getItemProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
  isHighlighted: boolean;
  item: Item;
  selectedItem: Item | null;
};

export type SelectProps<Item> = {
  floatingProps?: UseFloatingOptions;
  inputValue?: string;
  isItemDisabled?: (item: Item, index: number) => boolean;
  isOpen?: boolean;
  items: Item[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemToKey?: (item: Item | null) => any;
  itemToString?: (item: Item | null) => string;
  onHighlightedIndexChange?: (changes: UseComboboxHighlightedIndexChange<Item>) => void;
  onInputValueChange?: (changes: UseComboboxInputValueChange<Item>) => void;
  onIsOpenChange?: (changes: UseComboboxIsOpenChange<Item>) => void;
  onSelectedItemChange?: (changes: UseComboboxSelectedItemChange<Item>) => void;
  onStateChange?: (changes: UseComboboxStateChange<Item>) => void;
  ref?: ForwardedRef<HTMLInputElement>;
  renderInput: (props: SelectRenderInputProps) => ReactNode;
  renderItem: (props: SelectRenderItemProps<Item>) => ReactNode;
  renderMenu: (props: SelectRenderMenuProps) => ReactNode;
  selectedItem?: Item | null;
};
