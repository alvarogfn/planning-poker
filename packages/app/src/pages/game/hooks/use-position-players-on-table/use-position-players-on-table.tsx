type Side = "top" | "right" | "bottom" | "left";

type Position<T> = {
	[k in Side]: Array<T>;
};

const positions: Side[] = ["top", "right", "bottom", "left"];

export function positionPlayersOnTable<T>(items: T[] = []): Position<T> {
	let current: Side = "top";
	let next: Side = "right";

	const sides: Position<T> = {
		top: [],
		right: [],
		bottom: [],
		left: [],
	};

	const itemsPerSide = {
		top: Number.POSITIVE_INFINITY,
		right: 1,
		bottom: Number.POSITIVE_INFINITY,
		left: 1,
	};

	const moveToNextPosition = () => {
		const nextIndex = positions.findIndex((position) => position === next);
		const nextPosition = positions[nextIndex + 1] === undefined ? positions[0] : positions[nextIndex + 1];

		current = next;
		next = nextPosition;
	};

	return items.reduce((sides, player) => {
		if (sides[current].length >= itemsPerSide[current]) moveToNextPosition();

		sides[current].push(player);

		moveToNextPosition();

		return sides;
	}, sides);
}
