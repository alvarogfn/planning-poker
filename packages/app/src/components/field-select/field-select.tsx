import { offset, size } from "@floating-ui/react";
import { Children, type ForwardedRef, forwardRef, memo, useCallback } from "react";
import { Field } from "@/components/field";
import type { FieldSelectProps } from "@/components/field-select/types";
import { Icon } from "@/components/icon";
import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu-item";
import { Select } from "@/components/select";
import type { SelectRenderInputProps, SelectRenderItemProps, SelectRenderMenuProps } from "@/components/select/types";

const middleware = [
  offset({ mainAxis: 5 }),
  size({
    apply({ elements, rects }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`,
      });
    },
  }),
];

function Loading() {
  return (
    <MenuItem alignItems="center" display="flex" justifyContent="center">
      <Icon fill="blue-500" name="circle-loading" size="2rem" />
    </MenuItem>
  );
}

function FieldSelect<T>(
  { fieldProps, isPending, items, itemToString = String, menuProps, ...props }: FieldSelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const renderInput = useCallback(
    ({ getInputProps, getLabelProps }: SelectRenderInputProps) => (
      <Field labelText="Sistema de Votação" {...getInputProps(fieldProps)} labelProps={getLabelProps()} />
    ),
    [fieldProps],
  );

  const renderMenu = useCallback(
    ({ children, getMenuProps, isOpen }: SelectRenderMenuProps) => (
      <Menu visibility={isOpen ? "visible" : "hidden"} {...getMenuProps({ ...menuProps })}>
        {isPending ? <Loading /> : Children.count(children) ? children : <MenuItem>Nenhum resultado encontrado</MenuItem>}
      </Menu>
    ),
    [menuProps, isPending],
  );

  const renderItem = useCallback(
    ({ getItemProps, isHighlighted, item }: SelectRenderItemProps<T>) => {
      const parsedItem = itemToString ? itemToString(item) : String(item);

      return (
        <MenuItem {...getItemProps()} isHighlighted={isHighlighted} key={String(parsedItem)}>
          {parsedItem}
        </MenuItem>
      );
    },
    [itemToString],
  );

  return (
    <Select
      floatingProps={{ middleware }}
      items={items}
      {...props}
      itemToString={itemToString}
      ref={ref}
      renderInput={renderInput}
      renderItem={renderItem}
      renderMenu={renderMenu}
    />
  );
}

export default memo(forwardRef(FieldSelect)) as typeof FieldSelect;
