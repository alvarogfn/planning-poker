import IconArrowDown from "./icon-arrow-down";
import IconArrowUp from "./icon-arrow-up";
import IconCircleLoading from "./icon-circle-loading";

const icons = {
	"arrow-up": IconArrowUp,
	"arrow-down": IconArrowDown,
	"circle-loading": IconCircleLoading,
};

export type IconType = keyof typeof icons;

export default icons;
