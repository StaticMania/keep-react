import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { useModalContext } from "./ModalContext";
import { useTheme } from "../../Keep/ThemeContex";

export type ModalFooterProps = PropsWithChildren<
  Omit<ComponentProps<"div">, "className">
>;

export const ModalFooter: FC<ModalFooterProps> = ({ children, ...props }) => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.footer;
  const theirProps = excludeClassName(props);

  return (
    <div className={twMerge(theme.base, !popup && theme.popup)} {...theirProps}>
      {children}
    </div>
  );
};
