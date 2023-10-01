import { CaretDown, CaretLeft, CaretRight, CaretUp } from "phosphor-react";
import type {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import React, {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ButtonProps } from "../Button/Button";
import { Button } from "../Button/Button";
import { Floating, FloatingProps, keepFloatingTheme } from "../Floating";
import type { keepDropdownDividerTheme } from "./DropdownDivider";
import { DropdownDivider } from "./DropdownDivider";
import type { keepDropdownHeaderTheme } from "./DropdownHeader";
import { DropdownHeader } from "./DropdownHeader";
import { DropdownItem, keepDropdownItemTheme } from "./DropdownItem";
import { DeepPartial } from "../../helpers/deep-partial";
import { useTheme } from "../../Keep/ThemeContex";
import { uuid } from "~/src/helpers/uuid";

export interface keepDropdownFloatingTheme
  extends keepFloatingTheme,
    keepDropdownDividerTheme,
    keepDropdownHeaderTheme {
  item: keepDropdownItemTheme;
}

export interface keepDropdownTheme {
  floating: keepDropdownFloatingTheme;
  content: string;
  inlineWrapper: string;
  arrowIcon: string;
}

export interface DropdownProps
  extends PropsWithChildren,
    Pick<FloatingProps, "placement" | "trigger">,
    Omit<ButtonProps, "theme"> {
  arrowIcon?: boolean;
  dismissOnClick?: boolean;
  floatingArrow?: boolean;
  inline?: boolean;
  label: ReactNode;
  theme?: DeepPartial<keepDropdownTheme>;
}

export interface TriggerWrapperProps extends ButtonProps {
  setButtonWidth?: Dispatch<SetStateAction<number | undefined>>;
}

type Icons = Record<string, ReactNode>;

const icons: Icons = {
  top: <CaretUp size={18} />,
  right: <CaretRight size={18} />,
  bottom: <CaretDown size={18} />,
  left: <CaretLeft size={18} />,
};

const DropdownComponent: FC<DropdownProps> = ({
  children,
  dismissOnClick = true,
  ...props
}) => {
  const theme = useTheme().theme.dropdown;
  const theirProps = props as Omit<DropdownProps, "theme">;
  const {
    placement = "bottom-start",
    trigger = "click",
    label,
    inline,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;

  const Icon = useMemo(() => {
    const [p] = placement.split("-");
    return icons[p] ?? <CaretDown size={18} />;
  }, [placement]);

  const [closeRequestKey, setCloseRequestKey] = useState<string | undefined>(
    undefined
  );
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);

  const attachCloseListener = useCallback(
    // @ts-ignore TODO: Rewrite Dropdown
    (node: ReactNode) => {
      if (!React.isValidElement(node)) return node;
      if ((node as ReactElement).type === DropdownItem)
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          onClick: () => {
            node.props.onClick?.();
            dismissOnClick && setCloseRequestKey(uuid());
          },
        });
      if (node.props.children && typeof node.props.children === "object") {
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          children: Children.map(node.props.children, attachCloseListener),
        });
      }
      return node;
    },
    [dismissOnClick]
  );

  const content = useMemo(
    () => (
      <ul className={theme.content}>
        {Children.map(children, attachCloseListener)}
      </ul>
    ),
    [attachCloseListener, children, theme.content]
  );

  const TriggerWrapper: FC<TriggerWrapperProps> = ({
    children,
    setButtonWidth,
  }): JSX.Element => {
    const ref = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      if (ref.current) setButtonWidth?.(ref.current.clientWidth);
    }, [ref, setButtonWidth]);

    return inline ? (
      <button ref={ref} className={theme.inlineWrapper}>
        {children}
      </button>
    ) : (
      <Button {...buttonProps} ref={ref}>
        {children}
      </Button>
    );
  };

  return (
    <Floating
      content={content}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={floatingArrow}
      trigger={trigger}
      theme={theme.floating}
      minWidth={buttonWidth}
      closeRequestKey={closeRequestKey}
    >
      <TriggerWrapper setButtonWidth={setButtonWidth}>
        {label}
        <span className="ml-1">{arrowIcon && Icon}</span>
      </TriggerWrapper>
    </Floating>
  );
};

DropdownComponent.displayName = "Dropdown";
DropdownItem.displayName = "Dropdown.Item";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
