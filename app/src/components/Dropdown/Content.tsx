'use client'
import { FloatingArrow, FloatingFocusManager } from '@floating-ui/react'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useDropdownContext } from './Context'
import { dropdownTheme } from './theme'

const DropdownContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { context, arrowRef, refs, floatingStyles, getFloatingProps, showArrow, isOpen } = useDropdownContext()
    return (
      isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            {...props}
            ref={refs.setFloating || ref}
            style={floatingStyles}
            aria-labelledby={''}
            {...getFloatingProps()}
            className={cn(dropdownTheme.root, className)}>
            {showArrow && (
              <FloatingArrow width={20} height={10} tipRadius={2} fill="#fff" ref={arrowRef} context={context} />
            )}
            {children}
          </div>
        </FloatingFocusManager>
      )
    )
  },
)

DropdownContent.displayName = 'Dropdown.Content'

export { DropdownContent }
