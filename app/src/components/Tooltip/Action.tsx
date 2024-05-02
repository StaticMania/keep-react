'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { useTooltipContext } from './Context'

export interface TooltipActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const TooltipAction = forwardRef<HTMLButtonElement, TooltipActionProps>(
  ({ children, className, asChild, ...props }, propsRef) => {
    const { refs, getReferenceProps, isOpen } = useTooltipContext()

    const childrenRef = (children as any).ref
    const ref = useMergeRefs([refs.setReference, propsRef, childrenRef])

    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': isOpen ? 'open' : 'closed',
        }),
      )
    }
    return (
      <button
        ref={refs.setReference || ref}
        {...getReferenceProps()}
        className={cn('rounded-lg bg-metal-900 px-3.5 py-2 text-body-5 capitalize text-white', className)}>
        {children}
      </button>
    )
  },
)

TooltipAction.displayName = 'Dropdown.Action'
