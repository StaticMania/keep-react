import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import { List, X } from "phosphor-react";
import { FC, ReactNode, useState } from "react";

export interface NavbarMobileProps {
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

export const NavbarMobile: FC<NavbarMobileProps> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const theme = useTheme().theme.navbar.mobileMenu;
  return (
    <>
      <div
        className={twMerge(
          theme.base,
          showNav ? theme.open.on : theme.open.off
        )}
      >
        {showNav ? (
          <button
            className={twMerge(theme.close)}
            onClick={() => setShowNav(!showNav)}
          >
            <X size="28" color="gray" />
          </button>
        ) : (
          <button onClick={() => setShowNav(!showNav)}>
            <List size="28" color="gray" />
          </button>
        )}

        {children}
      </div>
    </>
  );
};
