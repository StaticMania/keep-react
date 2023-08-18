import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { List, X } from "phosphor-react";
import { FC, ReactNode, useState } from "react";

interface NavbarMobileProps {
  children: ReactNode;
}

export interface keepMobileMenuTheme {
  base: string;
  open: {
    on: string;
    off: string;
  };
  close: string;
}

const NavbarMobile: FC<NavbarMobileProps> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const theme = useTheme().theme.navbar.mobileMenu;
  return (
    <>
      <button onClick={() => setShowNav(!showNav)}>
        <List size="28" color="gray" />
      </button>
      <div
        className={classNames(
          theme.base,
          showNav ? theme.open.on : theme.open.off
        )}
      >
        <button
          className={classNames(theme.close)}
          onClick={() => setShowNav(!showNav)}
        >
          <X size="28" color="gray" />
        </button>
        {children}
      </div>
    </>
  );
};

export default NavbarMobile;
