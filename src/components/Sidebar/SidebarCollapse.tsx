import classNames from "classnames";
import { CaretDown } from "phosphor-react";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useEffect, useId, useState } from "react";
import { Tooltip } from "../Tooltip";
import { useSidebarContext } from "./SidebarContext";
import type { SidebarItemProps } from "./SidebarItem";
import { SidebarItemContext } from "./SidebarItemContext";
import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface KeepSidebarCollapseTheme {
  button: string;
  icon: {
    base: string;
    open: KeepBoolean;
  };
  label: {
    base: string;
    icon: string;
  };
  list: string;
}

export interface SidebarCollapseProps
  extends PropsWithChildren,
    Pick<
      SidebarItemProps,
      "active" | "as" | "href" | "icon" | "label" | "labelColor"
    >,
    ComponentProps<"button"> {
  onClick?: ComponentProps<"button">["onClick"];
  open?: boolean;
}

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  label,
  open = false,
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setOpen] = useState(open);
  const theme = useTheme().theme.sidebar.collapse;

  useEffect(() => setOpen(open), [open]);

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <li>
      {isCollapsed && !isOpen ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        id={`keep-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        className={classNames(theme.button, className)}
        {...props}
      >
        {Icon && (
          <div
            aria-hidden
            data-testid="keep-sidebar-collapse-icon"
            className={classNames(
              theme.icon.base,
              theme.icon.open[isOpen ? "on" : "off"]
            )}
          >
            {Icon}
          </div>
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span
              data-testid="keep-sidebar-collapse-label"
              className={theme.label.base}
            >
              {label}
            </span>
            {/* <HiChevronDown aria-hidden className={theme.label.icon} /> */}
            <CaretDown size={24} weight="bold" />
          </>
        )}
      </button>
      <ul
        aria-labelledby={`keep-sidebar-collapse-${id}`}
        hidden={!isOpen}
        className={theme.list}
      >
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>
          {children}
        </SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = "Sidebar.Collapse";
export default SidebarCollapse;