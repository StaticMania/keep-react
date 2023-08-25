import classNames from "classnames";
import { MinusCircle, PlusCircle } from "phosphor-react";
import type { ComponentProps, FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";
import { KeepBoolean, KeepHeadingLevel } from "@/src/Keep/KeepTheme";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { useTheme } from "@/src/Keep/ThemeContex";
import { mergeDeep } from "@/src/helpers/mergeDeep";

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
  theme: customTheme = {},
  ...props
}) => {
  const {
    showIcon,
    flush,
    isOpen,
    setOpen,
    iconPosition,
    disabled,
    closeIcon: CloseIcon,
    openIcon: OpenIcon,
  } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();

  const oldTheme = useTheme().theme.accordion.title;
  const theme = mergeDeep(oldTheme, customTheme);

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
      {iconPosition === "left" && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === "left" && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === "left" || !iconPosition) &&
        !isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon && <PlusCircle color="#5E718D" />}
      {(iconPosition === "left" || !iconPosition) &&
        isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon && <MinusCircle color="#5E718D" />}
      <Heading className={theme.heading} data-testid="keep-accordion-heading">
        {children}
      </Heading>
      {iconPosition === "right" && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === "right" && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === "right" || !iconPosition) &&
        !isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon && <PlusCircle color="#5E718D" />}
      {(iconPosition === "right" || !iconPosition) &&
        isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon && <MinusCircle color="#5E718D" />}
    </button>
  );
};
