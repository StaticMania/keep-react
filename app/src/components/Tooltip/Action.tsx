'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { Button } from '../Button'
import { useTooltipContext } from './Context'

export interface TooltipActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const TooltipAction = forwardRef<HTMLButtonElement, TooltipActionProps>(
  ({ children, className, asChild, ...props }, propsRef) => {
    const { refs, getReferenceProps, isOpen } = useTooltipContext()

    const childrenRef = (children as any)?.ref
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
      <Button variant="outline" ref={refs.setReference || ref} {...getReferenceProps()}>
        {children ?? 'Open Tooltip'}
      </Button>
    )
  },
)

TooltipAction.displayName = 'Dropdown.Action'
