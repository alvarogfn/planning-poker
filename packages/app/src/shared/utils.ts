import type { FunctionLike } from "./types";

export function range<T extends FunctionLike>(length: number, fn: T): ReturnType<T>[] {
	return Array.from({ length }, () => fn());
}
