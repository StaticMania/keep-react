/* eslint-disable react-hooks/exhaustive-deps */
import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { excludeClassName } from '../../helpers/exclude'
import { ModalBody } from './ModalBody'
import { ModalContext } from './ModalContext'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { KeepBoolean, KeepPositions, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'

/**
 * Interface for defining the theme of the KeepModal component.
 */
export interface keepModalTheme {
  /**
   * The base color of the modal.
   */
  base: string;
  /**
   * Whether the modal is currently being shown or not.
   */
  show: KeepBoolean;
  /**
   * The colors of the modal's content section.
   */
  content: {
    /**
     * The base color of the content section.
     */
    base: string;
    /**
     * The color of the inner content section.
     */
    inner: string;
  };
  /**
   * The colors of the modal's body section.
   */
  body: {
    /**
     * The base color of the body section.
     */
    base: string;
  };
  /**
   * The colors of the modal's header section.
   */
  header: {
    /**
     * The base color of the header section.
     */
    base: string;
    /**
     * The color of the header title.
     */
    title: string;
    /**
     * The color of the header icon section.
     */
    iconSection: string;
    /**
     * The colors of the header icon.
     */
    headerIcon: {
      /**
       * The base color of the header icon.
       */
      base: string;
      /**
       * The color of the header icon.
       */
      icon: string;
    };
    /**
     * The colors of the close button.
     */
    close: {
      /**
       * The base color of the close button.
       */
      base: string;
      /**
       * The color of the close icon.
       */
      icon: string;
    };
  };
  /**
   * The colors of the modal's footer section.
   */
  footer: {
    /**
     * The base color of the footer section.
     */
    base: string;
  };
  /**
   * The colors of the modal's sizes.
   */
  sizes: ModalSizes;
  /**
   * The colors of the modal's positions.
   */
  positions: ModalPositions;
}

/**
 * Interface for defining the props of the KeepModal component.
 */

export interface ModalPositions extends KeepPositions {
  [key: string]: string
}

/**
 * Defines an interface for modal sizes, extending the KeepSizes interface by omitting the "xs" size and allowing for additional string keys.
 */
export interface ModalSizes extends Omit<KeepSizes, "xs"> {
  [key: string]: string;
}

/**
 * Props for the Modal component.
 * @param {ReactNode} children - The content of the modal.
 * @param {() => void} onClose - Function to be called when the modal is closed.
 * @param {HTMLElement} root - The root element to attach the modal to.
 * @param {boolean} show - Whether the modal should be shown or not.
 * @param {ReactNode} icon - The icon to be displayed in the modal.
 * @param {keyof ModalSizes} size - The size of the modal.
 * @param {keyof ModalPositions} position - The position of the modal.
 */
export interface ModalProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "className">> {
  onClose?: () => void;
  root?: HTMLElement;
  show?: boolean;
  icon?: ReactNode;
  size?: keyof ModalSizes;
  position?: keyof ModalPositions;
}

const ModalComponent: FC<ModalProps> = ({
  children,
  show,
  root,
  icon,
  size = 'sm',
  position = 'center',
  onClose,
  ...props
}) => {
  const [parent, setParent] = useState<HTMLElement | undefined>(root)
  const [container, setContainer] = useState<HTMLDivElement | undefined>()
  const theme = useTheme().theme.modal
  const theirProps = excludeClassName(props)

  useEffect(() => {
    if (!parent) setParent(document.body)
    if (!container) setContainer(document.createElement('div'))
  }, [])

  useEffect(() => {
    if (!container || !parent || !show) {
      return
    }

    parent.appendChild(container)

    return () => {
      if (container) {
        parent.removeChild(container)
      }
    }
  }, [container, parent, show])

  return container
    ? createPortal(
        <ModalContext.Provider value={{ icon, onClose }}>
          <div
            aria-hidden={!show}
            className={twMerge(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off)}
            data-testid="modal"
            role="dialog"
            {...theirProps}>
            <div className={twMerge(theme.content.base, theme.sizes[size])}>
              <div className={theme.content.inner}>{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        container,
      )
    : null
}

ModalComponent.displayName = 'Modal'
ModalHeader.displayName = 'Modal.Header'
ModalBody.displayName = 'Modal.Body'
ModalFooter.displayName = 'Modal.Footer'

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
