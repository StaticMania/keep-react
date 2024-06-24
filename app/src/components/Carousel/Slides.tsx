'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { carouselTheme } from './theme'

export const CarouselSlides = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme
    return (
      <div {...props} className={cn(theme.item.container, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

CarouselSlides.displayName = 'Carousel.Slides'
