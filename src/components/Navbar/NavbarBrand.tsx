import { twMerge } from "tailwind-merge";
import type { ComponentProps, ElementType, FC, PropsWithChildren } from "react";
import { useTheme } from "../../Keep/ThemeContex";

export interface KeepNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps
  extends PropsWithChildren<ComponentProps<"a">> {
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
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
