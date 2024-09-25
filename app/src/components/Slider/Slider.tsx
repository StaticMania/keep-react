'use client'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export type SliderProps = ComponentPropsWithoutRef<typeof Root> & {
  trackClassName?: string
  rangeClassName?: string
  thumbClassName?: string
}

const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(
  ({ className, thumbClassName, trackClassName, rangeClassName, ...props }, ref) => {
    return (
      <Root ref={ref} className={cn('relative flex w-full touch-none select-none items-center', className)} {...props}>
        <Track className={cn('relative h-2 w-full grow overflow-hidden rounded-full bg-primary-25', trackClassName)}>
          <Range className={cn('absolute h-full bg-primary-500', rangeClassName)} />
        </Track>
        <Thumb
          className={cn(
            'block h-5 w-5 rounded-full border-2 border-primary-500 bg-primary-25 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            thumbClassName,
          )}
        />
        <Thumb
          className={cn(
            'block h-5 w-5 rounded-full border-2 border-primary-500 bg-primary-25 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            thumbClassName,
          )}
        />
      </Root>
    )
  },
)

Slider.displayName = Root.displayName

export { Slider }
