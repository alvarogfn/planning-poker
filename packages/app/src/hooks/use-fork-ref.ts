import { type MutableRefObject, type Ref, type RefCallback, useMemo } from "react";

const setRef = <T>(
	ref: MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
	value: T | null,
) => {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
};

export const useForkRef = <Instance>(...refs: Array<Ref<Instance> | undefined>): RefCallback<Instance> | null => {
	/**
	 * This will create a new function if the refs passed to this hook change and are all defined.
	 * This means react will call the old forkRef with `null` and the new forkRef
	 * with the ref. Cleanup naturally emerges from this behavior.
	 */

	// biome-ignore lint/correctness/useExhaustiveDependencies: no need for rerenders
	return useMemo(() => {
		if (refs.every((ref) => ref == null)) {
			return null;
		}

		return (instance) => {
			for (const ref of refs) {
				setRef(ref, instance);
			}
		};
	}, refs);
};
