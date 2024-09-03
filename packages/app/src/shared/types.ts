import type { ComponentType, ElementType } from "react";

export type SizeProps =
	| "w"
	| "width"
	| "height"
	| "h"
	| "maxW"
	| "maxWidth"
	| "maxH"
	| "maxHeight"
	| "minHeight"
	| "minH"
	| "minWidth"
	| "minW";

export type RecordKey = string | number | symbol;

export type ComponentOrElementType = ComponentType | ElementType;

// biome-ignore lint/suspicious/noExplicitAny:
export type FunctionLike = (...args: any[]) => any;

export type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> };

export type DeepReadonly<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
};
