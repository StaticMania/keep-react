import React from 'react'
import { useCarouselContext } from './CarouselContext'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons, PrevButton as PB } from './CarouselArrowButtons'

const PrevButton = () => {
  const { options, carouselPlugins } = useCarouselContext()
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi)
  return <PB onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
}

export default PrevButton
