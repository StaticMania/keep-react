import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useState } from "react";
import type { KeepNavbarBrandTheme } from "./NavbarBrand";
import { NavbarBrand } from "./NavbarBrand";
import type { KeepNavbarCollapseTheme } from "./NavbarCollapse";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarContext } from "./NavbarContext";
import type { KeepNavbarLinkTheme } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";
import NavbarMobile, { keepMobileMenuTheme } from "./NavbarMobile";
import type { KeepNavbarToggleTheme } from "./NavbarToggle";
import { NavbarToggle } from "./NavbarToggle";
import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface KeepNavbarTheme {
  root: KeepNavbarRootTheme;
  brand: KeepNavbarBrandTheme;
  collapse: KeepNavbarCollapseTheme;
  link: KeepNavbarLinkTheme;
  toggle: KeepNavbarToggleTheme;
  mobileMenu: keepMobileMenuTheme;
}

export interface KeepNavbarRootTheme {
  base: string;
  rounded: KeepBoolean;
  bordered: KeepBoolean;
  inner: {
    base: string;
    fluid: KeepBoolean;
  };
}

export interface NavbarComponentProps
  extends PropsWithChildren,
    ComponentProps<"nav"> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = useTheme().theme.navbar.root;

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          theme.base,
          theme.bordered[border ? "on" : "off"],
          theme.rounded[rounded ? "on" : "off"],
          className
        )}
        {...props}
      >
        <div
          className={classNames(
            theme.inner.base,
            theme.inner.fluid[fluid ? "on" : "off"]
          )}
        >
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
NavbarMobile.displayName = "Navbar.Mobile";

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
  Mobile: NavbarMobile,
});
