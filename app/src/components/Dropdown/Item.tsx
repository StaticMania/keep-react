'use client'
import { MotionProps } from 'framer-motion'
import { HTMLProps, KeyboardEvent, MouseEvent, ReactElement, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { dropdownTheme } from './theme'

export type DropdownItemProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    asChild?: boolean
  }

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ children, asChild, onClick, className, ...props }, ref) => {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (onClick) onClick(event as unknown as MouseEvent<HTMLDivElement>)
        event.preventDefault()
      }
    }

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<any>, {
        ref,
        ...props,
        onClick: (event: MouseEvent<HTMLDivElement>) => {
          if (onClick) onClick(event)
          if (children.props.onClick) children.props.onClick(event)
        },
        onKeyDown: handleKeyDown,
        role: children.props.role || 'menuitem',
        tabIndex: children.props.tabIndex || 0,
      })
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(dropdownTheme.item, className)}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="menuitem"
        tabIndex={0}>
        {children}
      </div>
    )
  },
)

DropdownItem.displayName = 'DropdownItem'

export { DropdownItem }
