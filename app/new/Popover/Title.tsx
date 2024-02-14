'use client'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { usePopoverContext } from './Context'

export const PopoverHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  function PopoverHeading(props, ref) {
    const { setLabelId } = usePopoverContext()
    const id = useId()
    useLayoutEffect(() => {
      setLabelId(id)
      return () => setLabelId(undefined)
    }, [id, setLabelId])

    return (
      <h2 {...props} ref={ref} id={id} className={cn('text-body-2 font-medium text-metal-900', props.className)}>
        {props.children}
      </h2>
    )
  },
)
