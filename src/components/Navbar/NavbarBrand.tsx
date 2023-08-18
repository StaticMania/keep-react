import classNames from "classnames";
import type { ComponentProps, ElementType, FC, PropsWithChildren } from "react";

import { LinkProps } from "next/link";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface KeepNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps
  extends PropsWithChildren<ComponentProps<"a">>,
    Partial<Pick<LinkProps, "href">> {
  as?: ElementType;
  href?: string;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  as: Component = "a",
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.navbar.brand;

  return (
    <Component className={classNames(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
