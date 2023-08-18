import classNames from "classnames";
import { List, X } from "phosphor-react";
import type { ComponentProps, FC, ReactNode } from "react";
import { useNavbarContext } from "./NavbarContext";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface KeepNavbarToggleTheme {
  base: string;
  icon: string;
}

export interface NavbarToggleProps extends ComponentProps<"button"> {
  barIcon?: ReactNode;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = <List size={24} weight="bold" />,
  className,
  ...props
}) => {
  const { isOpen, setIsOpen } = useNavbarContext();
  const theme = useTheme().theme.navbar.toggle;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      data-testid="k-navbar-toggle"
      onClick={handleClick}
      className={classNames(theme.base, className)}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      {!isOpen ? (
        <div aria-hidden className={theme.icon}>
          {BarIcon}
        </div>
      ) : (
        <div aria-hidden className={theme.icon}>
          <X size={24} weight="bold" />
        </div>
      )}
    </button>
  );
};
