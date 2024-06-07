'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useCarouselContext } from './CarouselContext'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'

export const CarouselIndicators = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { emblaApi } = useCarouselContext()
    const theme = carouselTheme
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    return (
      <div {...props} className={cn(theme.controls.indicators.container, className)} ref={ref}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              theme.controls.indicators.dot,
              index === selectedIndex && 'border-metal-900 dark:border-metal-100',
            )}
          />
        ))}
      </div>
    )
  },
)

CarouselIndicators.displayName = 'Carousel.Indicators'
