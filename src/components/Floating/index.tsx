import type { Placement } from "@floating-ui/core";
import {
  autoUpdate,
  useClick,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import classNames from "classnames";
import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { excludeClassName } from "../../helpers/exclude";
import {
  getArrowPlacement,
  getMiddleware,
  getPlacement,
} from "../../helpers/floating";

export interface KeepFloatingTheme {
  target: string;
  base: string;
  animation: string;
  hidden: string;
  style: {
    dark: string;
    light: string;
    auto: string;
  };
  title: string;
  content: string;
  arrow: {
    base: string;
    style: {
      dark: string;
      light: string;
      auto: string;
    };
    placement: string;
  };
}

export interface FloatingProps {
  children?: ReactNode;
  title?: ReactNode;
  content: ReactNode;
  theme: KeepFloatingTheme;
  placement?: "auto" | Placement;
  trigger?: "hover" | "click";
  style?: "dark" | "light" | "auto";
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  minWidth?: number;
  closeRequestKey?: string;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Floating: FC<FloatingProps> = ({
  children,
  title,
  content,
  theme,
  animation = "duration-300",
  arrow = true,
  placement = "top",
  style = "dark",
  trigger = "hover",
  minWidth,
  closeRequestKey,
  ...props
}) => {
  const theirProps = excludeClassName(props);

  const arrowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const floatingTooltip = useFloating<HTMLElement>({
    middleware: getMiddleware({ arrowRef, placement }),
    onOpenChange: setOpen,
    open,
    placement: getPlacement({ placement }),
  });
  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingTooltip;

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useFocus(context),
    useHover(context, { enabled: trigger === "hover" }),
    useRole(context, { role: "tooltip" }),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);

  useEffect(() => {
    if (closeRequestKey !== undefined) setOpen(false);
  }, [closeRequestKey]);

  return (
    <>
      <div
        className={theme.target}
        {...getReferenceProps({ ref: refs.setReference })}
        data-testid="keep-tooltip-target"
      >
        {children}
      </div>
      <div
        data-testid="keep-tooltip"
        {...getFloatingProps({
          className: classNames(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style]
          ),
          ref: refs.setFloating,
          style: {
            position: strategy,
            top: y ?? " ",
            left: x ?? " ",
            minWidth,
          },
          ...theirProps,
        })}
      >
        {title && <div className={theme.title}>{title}</div>}
        <div className={theme.content} data-testid="keep-tooltip-arrow">
          {content}
        </div>
        {arrow && (
          <div
            className={classNames(theme.arrow.base, {
              [theme.arrow.style.dark]: style === "dark",
              [theme.arrow.style.light]: style === "light",
              [theme.arrow.style.auto]: style === "auto",
            })}
            ref={arrowRef}
            style={{
              top: arrowY ?? " ",
              left: arrowX ?? " ",
              right: " ",
              bottom: " ",
              [getArrowPlacement({ placement: floatingTooltip.placement })]:
                theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  );
};
