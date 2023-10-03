import { XCircle } from "phosphor-react";
import React, { FC } from "react";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";
import { useTheme } from "~/src/Keep/ThemeContex";

export interface keepPopoverTheme {
  base: string;
  header: {
    base: string;
    title: string;
  };
  body: {
    base: string;
  };
  footer: {
    base: string;
    skip: string;
  };
}

interface PopoverProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Popover: FC<PopoverProps> = ({ title, description, children }) => {
  const theme = useTheme().theme.popover;
  return (
    <div role="Popover" className={twMerge(theme.base)}>
      <div className={twMerge(theme.header.base)}>
        {title ? <p className={twMerge(theme.header.title)}>{title}</p> : null}
        <button>
          <XCircle size={20} color="#5E718D" weight="bold" />
        </button>
      </div>

      {description ? (
        <p className={twMerge(theme.body.base)}>{description}</p>
      ) : null}

      {typeof children !== "undefined" && children}

      <div className={twMerge(theme.footer.base)}>
        <Button size="sm" type="outlinePrimary">
          Checkout
        </Button>
        <button className={twMerge(theme.footer.skip)}>Skip Now</button>
      </div>
    </div>
  );
};
