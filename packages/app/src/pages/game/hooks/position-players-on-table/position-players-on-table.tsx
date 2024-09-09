export type TableSide = "bottom" | "left" | "right" | "top";

type TablePosition<T> = {
  [k in TableSide]: T[];
};

const positions: TableSide[] = ["top", "right", "bottom", "left"];

export function positionPlayersOnTable<T>(items: T[] = []): TablePosition<T> {
  let current: TableSide = "top";
  let next: TableSide = "right";

  const sides: TablePosition<T> = {
    bottom: [],
    left: [],
    right: [],
    top: [],
  };

  const itemsPerSide = {
    bottom: Number.POSITIVE_INFINITY,
    left: 1,
    right: 1,
    top: Number.POSITIVE_INFINITY,
  };

  const moveToNextPosition = () => {
    const nextIndex = positions.indexOf(next);
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
