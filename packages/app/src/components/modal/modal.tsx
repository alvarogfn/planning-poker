import { BoxProps } from "@/components/box";
import Box from "@/components/box/box.tsx";
import { FloatingFocusManager, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react";
import type { ReactNode } from "react";
import { StyledContainer, StyledOverlay } from "./styles";

export type ModalProps = BoxProps & {
	isOpen?: boolean;
	children?: ReactNode;
	trigger?: ReactNode;
	onIsOpenChange?: (isOpen: boolean) => void;
};

function Modal({ trigger, children, onIsOpenChange, isOpen, ...props }: ModalProps) {
	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: onIsOpenChange,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context, {
		outsidePressEvent: "mousedown",
	});
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				{trigger}
			</Box>
			{isOpen && (
				<StyledOverlay lockScroll>
					<FloatingFocusManager context={context}>
						<StyledContainer {...getFloatingProps()} {...props} ref={refs.setFloating}>
							{children}
						</StyledContainer>
					</FloatingFocusManager>
				</StyledOverlay>
			)}
		</>
	);
}

export default Modal;
