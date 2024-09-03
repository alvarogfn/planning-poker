import { Field } from "@/components/field";
import type { FieldSelectProps } from "@/components/field-select/types";
import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu-item";
import { Select } from "@/components/select";
import type { SelectRenderInputProps, SelectRenderItemProps, SelectRenderMenuProps } from "@/components/select/types";
import { offset, size } from "@floating-ui/react";
import { type ForwardedRef, forwardRef, memo, useCallback } from "react";

const middleware = [
	offset({ mainAxis: 5 }),
	size({
		apply({ rects, elements }) {
			Object.assign(elements.floating.style, {
				width: `${rects.reference.width}px`,
			});
		},
	}),
];

function FieldSelect<T>(
	{ menuProps = {}, fieldProps = {}, itemToString = (v) => String(v), items, ...props }: FieldSelectProps<T>,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const renderInput = useCallback(
		({ getInputProps, getLabelProps }: SelectRenderInputProps) => {
			return <Field labelText="Sistema de Votação" {...getInputProps(fieldProps)} labelProps={getLabelProps()} />;
		},
		[fieldProps],
	);

	const renderMenu = useCallback(
		({ getMenuProps, isOpen, children }: SelectRenderMenuProps) => {
			return (
				<Menu visibility={isOpen ? "visible" : "hidden"} {...getMenuProps({ ...menuProps })}>
					{children}
				</Menu>
			);
		},
		[menuProps],
	);

	const renderItem = useCallback(
		({ getItemProps, item, isHighlighted }: SelectRenderItemProps<T>) => {
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
			items={items}
			floatingProps={{ middleware }}
			{...props}
			itemToString={itemToString}
			ref={ref}
			renderMenu={renderMenu}
			renderItem={renderItem}
			renderInput={renderInput}
		/>
	);
}

export default memo(forwardRef(FieldSelect)) as typeof FieldSelect;
