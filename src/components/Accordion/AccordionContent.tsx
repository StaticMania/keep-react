import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useAccordionContext } from "./AccordionPanelContext";
import { useTheme } from "@/src/Keep/ThemeContex";
import { DeepPartial } from "@/src/helpers/deep-partial";

export interface keepAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps
  extends PropsWithChildren<ComponentProps<"div">> {
  theme?: DeepPartial<keepAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const theme = useTheme().theme.accordion.content;

  return (
    <div
      className={classNames(theme.base, className)}
      data-testid="keep-accordion-content"
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
