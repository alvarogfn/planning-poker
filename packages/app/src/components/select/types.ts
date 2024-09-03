import type { RecordKey } from "@/shared/types";
import type { UseFloatingOptions } from "@floating-ui/react";
import type {
	UseComboboxHighlightedIndexChange,
	UseComboboxInputValueChange,
	UseComboboxIsOpenChange,
	UseComboboxSelectedItemChange,
	UseComboboxStateChange,
} from "downshift";
import type { ForwardedRef, ReactNode } from "react";

export type SelectRenderInputProps = {
	getInputProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
	getLabelProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
	getToggleButtonProps: (props: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
	isOpen: boolean;
	inputValue?: string;
	[k: string]: unknown;
};

export type SelectRenderMenuProps = {
	getMenuProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
	isOpen: boolean;
	children: ReactNode;
	[k: string]: unknown;
};

export type SelectRenderItemProps<Item> = {
	getItemProps: (props?: Record<RecordKey, unknown>) => Record<RecordKey, unknown>;
	item: Item;
	selectedItem: Item | null;
	isHighlighted: boolean;
	[k: string]: unknown;
};

export type SelectProps<Item> = {
	items: Item[];
	selectedItem?: Item | null;
	inputValue?: string;
	isOpen?: boolean;
	renderInput: (props: SelectRenderInputProps) => ReactNode;
	renderMenu: (props: SelectRenderMenuProps) => ReactNode;
	renderItem: (props: SelectRenderItemProps<Item>) => ReactNode;
	floatingProps?: UseFloatingOptions;
	isItemDisabled?(item: Item, index: number): boolean;
	itemToString?: (item: Item | null) => string;
	// biome-ignore lint/suspicious/noExplicitAny:
	itemToKey?: (item: Item | null) => any;
	onSelectedItemChange?: (changes: UseComboboxSelectedItemChange<Item>) => void;
	onIsOpenChange?: (changes: UseComboboxIsOpenChange<Item>) => void;
	onHighlightedIndexChange?: (changes: UseComboboxHighlightedIndexChange<Item>) => void;
	onStateChange?: (changes: UseComboboxStateChange<Item>) => void;
	onInputValueChange?: (changes: UseComboboxInputValueChange<Item>) => void;
	ref?: ForwardedRef<HTMLInputElement>;
};
