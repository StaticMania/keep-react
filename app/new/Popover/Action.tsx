'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLProps, ReactNode, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { usePopoverContext } from './Context'

interface PopoverTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & PopoverTriggerProps>(
  function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
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
      <button
        ref={ref}
        type="button"
        className={cn('rounded-md bg-primary-500 px-4 py-2 text-white', props.className)}
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}>
        {children}
      </button>
    )
  },
)
