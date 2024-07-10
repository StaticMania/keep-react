'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { Button } from '../Button'
import { useDropdownContext } from './Context'

export interface DropdownActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const DropdownAction = forwardRef<HTMLButtonElement, DropdownActionProps>(
  ({ children, className, asChild, ...props }, propsRef) => {
    const { refs, getReferenceProps, isOpen } = useDropdownContext()

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
      <Button ref={refs.setReference || ref} {...getReferenceProps()} className={cn(className)}>
        {children}
      </Button>
    )
  },
)

DropdownAction.displayName = 'DropdownAction'
