'use client'
import {
  FloatingArrow,
  FloatingFocusManager,
  Placement,
  arrow,
  autoPlacement,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { DotsThreeOutline } from 'phosphor-react'
import { FC, ReactNode, useRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Item } from './Item'
import { List } from './List'
import { dropdownTheme } from './theme'

interface DropdownProps {
  children?: ReactNode
  className?: string
  actionClassName?: string
  action?: ReactNode
  showArrow?: boolean
  placement?: Placement
}

export const DropdownComponent: FC<DropdownProps> = ({
  className,
  children,
  action,
  actionClassName,
  showArrow = false,
  placement = 'bottom-start',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        crossAxis: true,
        alignment: 'start',
        allowedPlacements: ['top', 'right', 'bottom', 'left'],
      }),
    ],
    whileElementsMounted: autoUpdate,
  })
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])
  const headingId = useId()
  return (
    <>
      <div className={cn(dropdownTheme.action, actionClassName)} ref={refs.setReference} {...getReferenceProps()}>
        {action ?? <DotsThreeOutline weight="thin" size={24} color="#444" />}
      </div>

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
            className={cn(dropdownTheme.root, className)}>
            {showArrow && (
              <FloatingArrow
                width={20}
                height={10}
                tipRadius={2}
                fill="#fff"
                ref={arrowRef}
                context={context}
                className="hidden"
              />
            )}
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

Item.displayName = 'Dropdown.Item'
List.displayName = 'Dropdown.List'

export const Dropdown = Object.assign(DropdownComponent, {
  List,
  Item,
})
