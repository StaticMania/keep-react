import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../helpers/cn'
import { ModalBody } from './ModalBody'
import { ModalContext } from './ModalContext'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalPositions, ModalSizes, modalTheme } from './theme'

/**
 * Props for the Modal component.
 * @interface ModalProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>}
 */
export interface ModalProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  /**
   * Callback function to be called when the modal is closed.
   * @type {() => void}
   */
  onClose?: () => void

  /**
   * The root element where the modal should be rendered.
   * @type {HTMLElement}
   * @default document.body
   */
  root?: HTMLElement

  /**
   * Determines whether the modal should be shown or hidden.
   * @type {boolean}
   * @default false
   */
  show?: boolean

  /**
   * The icon to be displayed in the modal.
   * @type {ReactNode}
   * @default null
   */
  icon?: ReactNode

  /**
   * The size of the modal.
   * @type {keyof ModalSizes}
   * @default 'sm'
   */
  size?: keyof ModalSizes

  /**
   * The position of the modal.
   * @type {keyof ModalPositions}
   * @default 'center'
   */
  position?: keyof ModalPositions
}

const ModalComponent: FC<ModalProps> = ({ children, show, root, icon, size = 'sm', position = 'center', onClose }) => {
  const theme = modalTheme
  const [parent, setParent] = useState<HTMLElement | undefined>(root)
  const [container, setContainer] = useState<HTMLDivElement | undefined>()

  useEffect(() => {
    if (!parent) setParent(document.body)
    if (!container) setContainer(document.createElement('div'))
  }, [parent, container])

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
            className={cn(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off)}
            data-testid="modal"
            role="dialog">
            <div className={cn(theme.content.base, theme.sizes[size])}>
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
