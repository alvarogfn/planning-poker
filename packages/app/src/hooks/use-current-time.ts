import { useEffect, useState } from "react";

export const getCurrentTime = () => {
	return 1000 * Math.floor(Date.now() / 1000 + 0.1);
};

export const getNextSecondsTimestamp = (seconds = 10) => {
	const date = new Date();
	const currentSeconds = date.getSeconds();

	date.setSeconds(currentSeconds + seconds);
	return date.getTime();
};

export const subtractTimestamp = (first: number, second: number) => {
	return Math.ceil((first - second) / 1000);
};

export const useCurrentTime = () => {
	const [now, setNow] = useState(getCurrentTime());

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const clock = () => {
			const currentTime = getCurrentTime();

			setNow(currentTime);

			timeoutId = setTimeout(clock, currentTime + 1000 - currentTime);
		};

		clock();

		return () => clearTimeout(timeoutId);
	}, []);

	return now;
};
