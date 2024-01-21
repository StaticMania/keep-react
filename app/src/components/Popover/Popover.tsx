'use client'
import {
  FloatingArrow,
  arrow,
  autoPlacement,
  autoUpdate,
  flip,
  hide,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react'
import { XCircle } from 'phosphor-react'
import { Children, FC, ReactNode, isValidElement, useEffect, useRef, useState } from 'react'

import { Action } from './Action'
import { Container } from './Container'
import { Description } from './Description'
import { PopoverContext } from './PopoverContext'
import { Title } from './Title'

import { cn } from '../../helpers/cn'
import { popoverTheme } from './theme'

/**
 * Props for the Popover component.
 * @interface PopoverProps
 */
export interface PopoverProps {
  /**
   * The content of the Popover.
   * @type {ReactNode}
   */
  children?: ReactNode
  /**
   * The class name of the Popover.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * The position of the Popover.
   * @type {string}
   * @default 'bottom-start'
   */
  position?:
    | 'top'
    | 'top-end'
    | 'top-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
  /**
   * Whether to show the dismiss icon.
   * @type {boolean}
   * @default true
   */
  showDismissIcon?: boolean
  /**
   * The trigger of the Popover.
   * @type {'hover' | 'click'}
   * @default 'click'
   */
  trigger?: 'hover' | 'click'
  /**
   * Whether to show the arrow.
   * @type {boolean}
   * @default true
   */
  showArrow?: boolean
  /**
   * The icon of the Popover.
   * @type {ReactNode}
   */
  icon?: ReactNode
  // [key: string]: any
}

export const PopoverComponent: FC<PopoverProps> = ({
  children,
  className,
  trigger = 'click',
  position = 'bottom-start',
  showDismissIcon = true,
  showArrow = true,
  icon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(true)
  const arrowRef = useRef(null)
  const { root } = popoverTheme
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        crossAxis: true,
        alignment: 'start',
        allowedPlacements: ['top', 'right', 'bottom', 'left'],
      }),
      hide({
        strategy: 'escaped',
      }),
    ],
    whileElementsMounted: autoUpdate,
    placement: position,
  })
  const hover = useHover(context, {
    enabled: trigger === 'hover',
  })
  const click = useClick(context, {
    enabled: trigger === 'click',
  })
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const { styles } = useTransitionStyles(context, {
    duration: 300,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role, hover])
  const actions = Children.toArray(children).filter((child) => isValidElement(child) && child.type === Action)
  const isTitleExists = Children.toArray(children).some((child) => isValidElement(child) && child.type === Title)
  const filteredChildren = Children.toArray(children).filter((child) => isValidElement(child) && child.type !== Action)

  useEffect(() => {
    if (isTitleExists) {
      setTitle(true)
    } else {
      setTitle(false)
    }
  }, [isTitleExists])
  return (
    <PopoverContext.Provider value={{ isTitleExist: title }}>
      <div className="inline-block" ref={refs.setReference} {...getReferenceProps()} onClick={() => setIsOpen(!isOpen)}>
        {actions}
      </div>
      {isOpen && (
        <div
          {...props}
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
          className={cn(className, root.base)}>
          {showArrow && <FloatingArrow ref={arrowRef} context={context} fill="#FFFFFF" />}
          {showDismissIcon && (
            <button onClick={() => setIsOpen(false)} className={root.icon}>
              {typeof icon !== 'undefined' ? icon : <XCircle size={24} color="#5E718D" weight="light" />}
            </button>
          )}
          <div>{filteredChildren}</div>
        </div>
      )}
    </PopoverContext.Provider>
  )
}

Title.displayName = 'Popover.Title'
Description.displayName = 'Popover.Description'
Action.displayName = 'Popover.Body'
Container.displayName = 'Popover.Container'

export const Popover = Object.assign(PopoverComponent, {
  Title,
  Description,
  Action,
  Container,
})
