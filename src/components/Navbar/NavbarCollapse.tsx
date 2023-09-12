import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useNavbarContext } from "./NavbarContext";
import { useTheme } from "../../Keep/ThemeContex";
import { KeepBoolean } from "../../Keep/KeepTheme";

export interface KeepNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: KeepBoolean;
}

export interface NavbarCollapseProps
  extends PropsWithChildren<ComponentProps<"div">> {
  className?: string;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  children,
  className,
  ...props
}) => {
  const { isOpen } = useNavbarContext();
  const theme = useTheme().theme.navbar.collapse;

  return (
    <div
      data-testid="keep-navbar-collapse"
      className={twMerge(
        theme.base,
        theme.hidden[!isOpen ? "on" : "off"],
        className
      )}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
