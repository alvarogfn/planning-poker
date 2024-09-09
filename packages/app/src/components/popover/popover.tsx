import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import type { PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Box } from "@/components/box";

type PopoverProps = PropsWithChildren<{
  content?: ReactNode;
  isOpen: boolean;
  onIsOpenChange: (isOpen: boolean) => void;
}>;

const middlewares = [
  offset({ mainAxis: 10 }),
  flip(),
  shift(),
  size({
    apply({ elements, rects }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`,
      });
    },
  }),
];

function Popover({ children, content, isOpen, onIsOpenChange }: PopoverProps) {
  const { context, floatingStyles, refs } = useFloating({
    middleware: middlewares,
    onOpenChange: onIsOpenChange,
    open: isOpen,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss, role]);

  return (
    <>
      <Box ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </Box>

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          {createPortal(
            <Box ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} bg="white">
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
