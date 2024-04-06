import React from 'react'
import { useCarouselContext } from './CarouselContext'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'
import { cn } from '../../helpers/cn'

const Indicators = () => {
  const { emblaApi } = useCarouselContext()
  const theme = carouselTheme
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  return (
    <div className={theme.controls.indicators.container}>
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn(theme.controls.indicators.dot, index === selectedIndex && 'border-metal-600')}
        />
      ))}
    </div>
  )
}

export default Indicators
