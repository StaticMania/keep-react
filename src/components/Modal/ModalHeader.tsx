import classNames from "classnames";
import { X } from "phosphor-react";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { useModalContext } from "./ModalContext";
import { useTheme } from "../../Keep/ThemeContex";

export type ModalHeaderProps = PropsWithChildren<
  Omit<ComponentProps<"div">, "className">
>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  ...props
}): JSX.Element => {
  const { popup, icon, modalType, onClose } = useModalContext();
  const theme = useTheme().theme.modal.header;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={classNames(theme.base, {
        [theme.popup]: popup,
      })}
      {...theirProps}
    >
      <div className={classNames(theme.iconSection)}>
        <div
          className={classNames(
            theme.headerIcon.base,
            theme.headerIcon.color[modalType as string]
          )}
        >
          {icon}
        </div>
        {onClose && (
          <button
            aria-label="Close"
            className={theme.close.base}
            type="button"
            onClick={onClose}
          >
            <X weight="bold" className={theme.close.icon} />
          </button>
        )}
      </div>
      <h3 className={theme.title}>{children}</h3>
    </div>
  );
};
