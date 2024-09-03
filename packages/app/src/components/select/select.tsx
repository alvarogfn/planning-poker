import { useForkRef } from "@/hooks/use-fork-ref";
import { useFloating } from "@floating-ui/react";
import { useCombobox } from "downshift";
import { type ForwardedRef, forwardRef, memo, useMemo } from "react";
import { createPortal } from "react-dom";
import type { SelectProps } from "./types";

function Select<Item>(
	{
		items,
		selectedItem,
		renderInput,
		isOpen,
		inputValue,
		renderMenu,
		renderItem,
		floatingProps,
		onIsOpenChange,
		...props
	}: SelectProps<Item>,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const { floatingStyles, refs, update } = useFloating(floatingProps);

	const { getInputProps, getLabelProps, getMenuProps, getItemProps, getToggleButtonProps, ...downshift } =
		useCombobox<Item>({
			...props,
			onIsOpenChange: (changes) => {
				if (onIsOpenChange) onIsOpenChange(changes);
				if (changes.isOpen) update();
			},
			items,
			selectedItem,
			isOpen,
		});

	const forkedSelectRef = useForkRef(ref, refs.setReference);

	const inputElement = useMemo(() => {
		return renderInput({
			getLabelProps: getLabelProps,
			getToggleButtonProps: getToggleButtonProps,
			getInputProps: (inputProps) => getInputProps({ ...inputProps, ref: forkedSelectRef }),
			isOpen: downshift.isOpen,
			inputValue: downshift.inputValue,
		});
	}, [
		renderInput,
		getLabelProps,
		getToggleButtonProps,
		getInputProps,
		forkedSelectRef,
		downshift.isOpen,
		downshift.inputValue,
	]);

	const itemsElement = useMemo(() => {
		return items.map((item, index) =>
			renderItem({
				getItemProps: (itemProps) => getItemProps({ ...itemProps, item, index }),
				item,
				selectedItem: downshift.selectedItem,
				isHighlighted: downshift.highlightedIndex === index,
			}),
		);
	}, [items, renderItem, getItemProps, downshift.selectedItem, downshift.highlightedIndex]);

	const menuElement = useMemo(() => {
		return renderMenu({
			isOpen: downshift.isOpen,
			getMenuProps: (menuProps) => getMenuProps({ ...menuProps, style: floatingStyles, ref: refs.setFloating }),
			children: itemsElement,
		});
	}, [downshift.isOpen, itemsElement, getMenuProps, floatingStyles, refs.setFloating, renderMenu]);

	return (
		<>
			{inputElement}
			{createPortal(menuElement, document.body)}
		</>
	);
}

export default memo(forwardRef(Select)) as typeof Select;
