import { Box } from "@/components/box";
import {
	FloatingFocusManager,
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
} from "@floating-ui/react";
import type { PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";

type PopoverProps = PropsWithChildren<{
	content?: ReactNode;
	isOpen: boolean;
	onIsOpenChange: (isOpen: boolean) => void;
}>;

function Popover({ children, content, isOpen, onIsOpenChange }: PopoverProps) {
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: onIsOpenChange,
		middleware: [offset({ mainAxis: 10 }), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				{children}
			</Box>

			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					{createPortal(
						<Box style={floatingStyles} ref={refs.setFloating} {...getFloatingProps()} bg="white">
							{content}
						</Box>,
						document.body,
					)}
				</FloatingFocusManager>
			)}
		</>
	);
}

export default Popover;
