import { KeepBoolean } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import type { ComponentProps, ElementType, FC, PropsWithChildren } from "react";

export interface KeepNavbarLinkTheme {
  base: string;
  active: KeepBoolean;
  disabled: KeepBoolean;
}

export interface NavbarLinkProps
  extends PropsWithChildren<ComponentProps<"a">> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.navbar.link;

  return (
    <li>
      <Component
        className={twMerge(
          theme.base,
          active && theme.active.on,
          !active && !disabled && theme.active.off,
          theme.disabled[disabled ? "on" : "off"],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
