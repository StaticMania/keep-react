'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useCarouselContext } from './CarouselContext'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'

export interface CarouselIndicatorsProps extends HTMLAttributes<HTMLDivElement> {
  dotButtonStyle?: string
}

export const CarouselIndicators = forwardRef<HTMLDivElement, CarouselIndicatorsProps>(
  ({ className, dotButtonStyle, ...props }, ref: Ref<HTMLDivElement>) => {
    const { emblaApi } = useCarouselContext()
    const theme = carouselTheme
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    return (
      <div {...props} className={cn(theme.controls.indicators.container, className)} ref={ref}>
        {scrollSnaps.map((number, index) => (
          <DotButton
            key={number}
            data-active={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
            className={cn(theme.controls.indicators.dot, dotButtonStyle)}
          />
        ))}
      </div>
    )
  },
)

CarouselIndicators.displayName = 'CarouselIndicators'
