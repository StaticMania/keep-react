import classNames from "classnames";
import { MinusCircle } from "phosphor-react";
import type { ComponentProps, FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";
import { KeepBoolean, KeepHeadingLevel } from "@/src/Keep/KeepTheme";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepAccordionTitleTheme {
  arrow: {
    base: string;
    open: KeepBoolean;
  };
  base: string;
  flush: KeepBoolean;
  heading: string;
  open: KeepBoolean;
  disabled: string;
  iconPosition: {
    left: string;
    right: string;
  };
}

export interface AccordionTitleProps extends ComponentProps<"button"> {
  arrowIcon?: FC<ComponentProps<"svg">>;
  as?: KeepHeadingLevel;
  theme?: DeepPartial<keepAccordionTitleTheme>;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = "h1",
  children,
  className,
  ...props
}) => {
  const {
    arrowIcon: ArrowIcon,
    flush,
    isOpen,
    setOpen,
    iconPosition,
    disabled,
  } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();

  const theme = useTheme().theme.accordion.title;

  return (
    <button
      className={classNames(
        theme.base,
        theme.flush[flush ? "on" : "off"],
        theme.open[isOpen ? "on" : "off"],
        className,
        disabled && theme.disabled,
        iconPosition === "right" && theme.iconPosition.right,
        iconPosition === "left" && theme.iconPosition.left
      )}
      onClick={onClick}
      type="button"
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" &&
        (!isOpen ? ArrowIcon : <MinusCircle size={24} color="#5E718D" />)}
      <Heading className={theme.heading} data-testid="keep-accordion-heading">
        {children}
      </Heading>
      {iconPosition === "right" &&
        (!isOpen ? ArrowIcon : <MinusCircle size={24} color="#5E718D" />)}
    </button>
  );
};
