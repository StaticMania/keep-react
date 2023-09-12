/* eslint-disable react-hooks/exhaustive-deps */
import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { excludeClassName } from "../../helpers/exclude";
import { ModalBody } from "./ModalBody";
import { ModalContext } from "./ModalContext";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import {
  KeepBoolean,
  KeepPositions,
  KeepSizes,
  KeepStateColors,
} from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepModalTheme {
  base: string;
  show: KeepBoolean;
  content: {
    base: string;
    inner: string;
  };
  body: {
    base: string;
    popup: string;
  };
  header: {
    base: string;
    popup: string;
    title: string;
    iconSection: string;
    headerIcon: {
      base: string;
      icon: string;
      color: ModalColors;
    };
    close: {
      base: string;
      icon: string;
    };
  };
  footer: {
    base: string;
    popup: string;
  };
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface ModalPositions extends KeepPositions {
  [key: string]: string;
}

export interface ModalColors extends KeepStateColors {
  [key: string]: string;
}

export interface ModalSizes extends Omit<KeepSizes, "xs"> {
  [key: string]: string;
}

export interface ModalProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "className">> {
  onClose?: () => void;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  icon?: ReactNode;
  size?: keyof ModalSizes;
  modalType?: keyof ModalColors;
  position?: keyof ModalPositions;
}

const ModalComponent: FC<ModalProps> = ({
  children,
  show,
  root,
  popup,
  icon,
  size = "sm",
  modalType = "info",
  position = "center",
  onClose,
  ...props
}) => {
  const [parent, setParent] = useState<HTMLElement | undefined>(root);
  const [container, setContainer] = useState<HTMLDivElement | undefined>();
  const theme = useTheme().theme.modal;
  const theirProps = excludeClassName(props);

  useEffect(() => {
    if (!parent) setParent(document.body);
    if (!container) setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (!container || !parent || !show) {
      return;
    }

    parent.appendChild(container);

    return () => {
      if (container) {
        parent.removeChild(container);
      }
    };
  }, [container, parent, show]);

  return container
    ? createPortal(
        <ModalContext.Provider value={{ popup, icon, modalType, onClose }}>
          <div
            aria-hidden={!show}
            className={twMerge(
              theme.base,
              theme.positions[position],
              show ? theme.show.on : theme.show.off
            )}
            data-testid="modal"
            role="dialog"
            {...theirProps}
          >
            <div className={twMerge(theme.content.base, theme.sizes[size])}>
              <div className={theme.content.inner}>{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        container
      )
    : null;
};

ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
