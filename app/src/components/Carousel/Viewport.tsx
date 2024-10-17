'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useCarouselContext } from './CarouselContext'
import { carouselTheme } from './theme'

export const CarouselViewport = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className }, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme
    const { emblaRef } = useCarouselContext()

    return (
      <div className={cn(theme.viewport, className)} ref={ref || emblaRef}>
        {children}
      </div>
    )
  },
)

CarouselViewport.displayName = 'CarouselViewport'
