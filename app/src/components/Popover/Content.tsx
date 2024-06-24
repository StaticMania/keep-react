'use client'
import { FloatingArrow, FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { usePopoverContext } from './Context'

export const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function PopoverContent(
  { style, ...props },
  propRef,
) {
  const { context: floatingContext, showArrow, ...context } = usePopoverContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          ref={ref}
          style={{ ...context.floatingStyles, ...style }}
          aria-labelledby={context.labelId}
          className={cn('!z-20 max-w-xs rounded-xl bg-white dark:bg-metal-900', props.className)}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps(props)}>
          {props.children}
          {showArrow && (
            <FloatingArrow
              className="fill-white dark:fill-metal-900"
              width={20}
              height={10}
              tipRadius={2}
              ref={context.arrowRef}
              context={floatingContext}
            />
          )}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
})
