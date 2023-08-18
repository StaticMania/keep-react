import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { LinkProps } from "next/link";
import type { ComponentProps, ElementType, FC, PropsWithChildren } from "react";

export interface KeepNavbarLinkTheme {
  base: string;
  active: KeepBoolean;
  disabled: KeepBoolean;
}

export interface NavbarLinkProps
  extends PropsWithChildren<ComponentProps<"a">>,
    Partial<Pick<LinkProps, "href">> {
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
        className={classNames(
          theme.base,
          {
            [theme.active.on]: active,
            [theme.active.off]: !active && !disabled,
          },
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
