import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useNavigationContext } from "./NavigationContext";
import { useTheme } from "../../Keep/ThemeContex";
import { CaretLeft } from "phosphor-react";

export interface CollapseProps {
  children?: React.ReactNode;
  className?: string;
  collapseType?: "sidebar" | "fullWidth";
}

export interface CollapseTheme {
  base: string;
  menu: {
    open: string;
    close: string;
    position: string;
  };
  type: {
    sidebar: string;
    fullWidth: string;
  };
}

export const NavigationCollapse: FC<CollapseProps> = ({
  children,
  className,
  collapseType = "fullWidth",
}) => {
  const { isOpen, setIsOpen } = useNavigationContext();
  const { collapse } = useTheme().theme.navigation;
  return (
    <div
      className={twMerge(
        collapse.base,
        isOpen ? collapse.menu.open : collapse.menu.close,
        className ? className : collapse.menu.position,
        collapseType === "sidebar"
          ? collapse.type.sidebar
          : collapse.type.fullWidth
      )}
    >
      <div className="mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 flex items-center text-sm gap-px"
        >
          <CaretLeft size="16" />
          Go Back
        </button>
      </div>
      {children}
    </div>
  );
};
