import { FC } from "react";
import { List, X } from "phosphor-react";
import { twMerge } from "tailwind-merge";
import { useNavigationContext } from "./NavigationContext";

export interface NavigationToggleProps {
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  className?: string;
}

export const NavigationToggle: FC<NavigationToggleProps> = ({
  closeIcon = <X size={20} color="#444" />,
  openIcon = <List size={20} color="#444" />,
  className,
}) => {
  const { isOpen, setIsOpen } = useNavigationContext();
  return (
    <button
      className={twMerge(className ? className : "lg:hidden block")}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? closeIcon : openIcon}
    </button>
  );
};
