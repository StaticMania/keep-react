import {
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useTransitionStyles,
  FloatingArrow,
  arrow,
  autoPlacement,
  hide,
} from "@floating-ui/react";
import { XCircle } from "phosphor-react";
import { FC, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../Keep/ThemeContex";

interface PopoverProps {
  trigger?: "hover" | "click";
  children: React.ReactNode;
  additinalContent?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  customClass?: string;
  showDismissIcon?: boolean;
  showArrow?: boolean;
  position?:
    | "top"
    | "top-end"
    | "top-start"
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left"
    | "left-end"
    | "left-start"
    | "right"
    | "right-end"
    | "right-start";
}

export interface keepPopoverTheme {
  target: string;
  body: {
    base: string;
    title: string;
    discription: string;
  };
}

export const Popover: FC<PopoverProps> = ({
  trigger = "click",
  children,
  title,
  description,
  icon,
  additinalContent,
  customClass,
  position = "bottom-start",
  showDismissIcon = true,
  showArrow = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        crossAxis: true,
        alignment: "start",
        allowedPlacements: ["top", "right", "bottom", "left"],
      }),
      hide({
        strategy: "escaped",
      }),
    ],
    whileElementsMounted: autoUpdate,
    placement: position,
  });
  const hover = useHover(context, {
    enabled: trigger === "hover",
  });
  const click = useClick(context, {
    enabled: trigger === "click",
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const { styles } = useTransitionStyles(context, {
    duration: 300,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
    hover,
  ]);

  const theme = useTheme().theme.popover;

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={theme.target}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
          className={twMerge(theme.body.base, customClass)}
        >
          {showArrow && (
            <FloatingArrow ref={arrowRef} context={context} fill="#FFFFFf" />
          )}
          {showDismissIcon && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[25px] right-6"
            >
              {typeof icon !== "undefined" ? (
                icon
              ) : (
                <XCircle size={24} color="#5E718D" weight="light" />
              )}
            </button>
          )}
          {title && (
            <h2 role="keep-popover" className={theme.body.title}>
              {title}
            </h2>
          )}
          {description && (
            <p className={theme.body.discription}>{description}</p>
          )}
          {typeof additinalContent !== "undefined" && additinalContent}
        </div>
      )}
    </>
  );
};
