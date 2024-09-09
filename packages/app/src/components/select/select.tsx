import { useFloating } from "@floating-ui/react";
import { useCombobox } from "downshift";
import { type ForwardedRef, forwardRef, memo, useMemo } from "react";
import { createPortal } from "react-dom";
import type { SelectProps } from "./types";
import { useForkRef } from "@/hooks/use-fork-ref";

function Select<Item>(
  {
    floatingProps,
    inputValue,
    isOpen,
    items,
    onIsOpenChange,
    renderInput,
    renderItem,
    renderMenu,
    selectedItem,
    ...props
  }: SelectProps<Item>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { floatingStyles, refs, update } = useFloating(floatingProps);

  const { getInputProps, getItemProps, getLabelProps, getMenuProps, getToggleButtonProps, ...downshift } = useCombobox<Item>({
    ...props,
    isOpen,
    items,
    onIsOpenChange: (changes) => {
      if (onIsOpenChange) onIsOpenChange(changes);
      if (changes.isOpen) update();
    },
    selectedItem,
  });

  const forkedSelectRef = useForkRef(ref, refs.setReference);

  const inputElement = useMemo(
    () =>
      renderInput({
        getInputProps: (inputProps) => getInputProps({ ...inputProps, ref: forkedSelectRef }),
        getLabelProps: getLabelProps,
        getToggleButtonProps: getToggleButtonProps,
        inputValue: downshift.inputValue,
        isOpen: downshift.isOpen,
      }),
    [renderInput, getLabelProps, getToggleButtonProps, getInputProps, forkedSelectRef, downshift.isOpen, downshift.inputValue],
  );

  const itemsElement = useMemo(
    () =>
      items.map((item, index) =>
        renderItem({
          getItemProps: (itemProps) => getItemProps({ ...itemProps, index, item }),
          isHighlighted: downshift.highlightedIndex === index,
          item,
          selectedItem: downshift.selectedItem,
        }),
      ),
    [items, renderItem, getItemProps, downshift.selectedItem, downshift.highlightedIndex],
  );

  const menuElement = useMemo(
    () =>
      renderMenu({
        children: itemsElement,
        getMenuProps: (menuProps) => getMenuProps({ ...menuProps, ref: refs.setFloating, style: floatingStyles }),
        isOpen: downshift.isOpen,
      }),
    [downshift.isOpen, itemsElement, getMenuProps, floatingStyles, refs.setFloating, renderMenu],
  );

  return (
    <>
      {inputElement}
      {createPortal(menuElement, document.body)}
    </>
  );
}

export default memo(forwardRef(Select)) as typeof Select;
