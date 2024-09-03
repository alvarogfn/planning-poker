import { useEffect } from "react";

type EventTypes = keyof WindowEventMap;

function useOnEvent<T extends EventTypes>(event: T, callback: (ev: WindowEventMap[T]) => unknown) {
	useEffect(() => {
		window.addEventListener(event, callback);
		return () => {
			window.removeEventListener(event, callback);
		};
	}, [event, callback]);
}

export default useOnEvent;
