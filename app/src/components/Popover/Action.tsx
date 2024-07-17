'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLProps, cloneElement, forwardRef, isValidElement } from 'react'
import { Button } from '../Button'
import { usePopoverContext } from './Context'

export interface PopoverActionProps {
  asChild?: boolean
}

export const PopoverAction = forwardRef<HTMLElement, HTMLProps<HTMLElement> & PopoverActionProps>(
  ({ children, asChild = false, className, ...props }, propRef) => {
    const context = usePopoverContext()
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <Button
        shape="circle"
        variant="outline"
        ref={ref}
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}>
        {children}
      </Button>
    )
  },
)

PopoverAction.displayName = 'PopoverAction'
