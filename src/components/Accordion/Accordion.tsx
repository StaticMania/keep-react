import classNames from "classnames";
import { PlusCircle } from "phosphor-react";
import type {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { Children, cloneElement, useMemo, useState } from "react";
import type { keepAccordionComponentTheme } from "./AccordionContent";
import { AccordionContent } from "./AccordionContent";
import type { AccordionPanelProps } from "./AccordionPanel";
import { AccordionPanel } from "./AccordionPanel";
import type { keepAccordionTitleTheme } from "./AccordionTitle";
import { AccordionTitle } from "./AccordionTitle";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepAccordionTheme {
  root: keepAccordionRootTheme;
  content: keepAccordionComponentTheme;
  title: keepAccordionTitleTheme;
}

export interface keepAccordionRootTheme {
  base: string;
  flush: KeepBoolean;
}

export interface AccordionProps
  extends PropsWithChildren<ComponentProps<"div">> {
  alwaysOpen?: boolean;
  arrowIcon?: ReactNode;
  children:
    | ReactElement<AccordionPanelProps>
    | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<keepAccordionTheme>;
  iconPosition?: string;
  disabled?: boolean;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = <PlusCircle size={24} color="#5E718D" />,
  children,
  flush = false,
  collapseAll = false,
  className,
  iconPosition = "right",
  disabled = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          flush,
          disabled,
          iconPosition,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        })
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen, iconPosition, disabled]
  );

  const theme = useTheme().theme.accordion.root;

  return (
    <div
      className={classNames(
        theme.base,
        theme.flush[flush ? "on" : "off"],
        className
      )}
      data-testid="keep-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
