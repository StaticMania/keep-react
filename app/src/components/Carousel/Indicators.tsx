import React from 'react'
import { useCarouselContext } from './CarouselContext'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'
import { cn } from '../../helpers/cn'

const Indicators = () => {
  const { options, carouselPlugins } = useCarouselContext()
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)
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
