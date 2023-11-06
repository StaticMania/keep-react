import { FC } from "react";

export interface NavBrandProps {
  children?: React.ReactNode;
}

export const NavigationBrand: FC<NavBrandProps> = ({ children }) => {
  return <div>{children}</div>;
};
