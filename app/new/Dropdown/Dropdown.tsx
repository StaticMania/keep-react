'use client'
import {
  FloatingArrow,
  FloatingFocusManager,
  arrow,
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
import { cn } from '~/app/src/helpers/cn'
import { Item } from './Item'
import { List } from './List'

interface DropdownProps {
  children?: ReactNode
  className?: string
  actionClassName?: string
  action?: ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ className, children, action, actionClassName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({
        element: arrowRef,
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
      <div
        className={cn(
          'inline-block cursor-pointer select-none rounded-lg border border-metal-200 bg-white p-2.5 text-body-5 font-normal text-white',
          actionClassName,
        )}
        ref={refs.setReference}
        {...getReferenceProps()}>
        {action ?? <DotsThreeOutline weight="thin" size={24} color="#444" />}
      </div>

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
            className={cn('w-[16rem] rounded-xl border border-metal-100 bg-white p-4 outline-none', className)}>
            <FloatingArrow width={20} height={10} tipRadius={2} fill="#fff" ref={arrowRef} context={context} />
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
