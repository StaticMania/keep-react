import React from 'react'
import { usePrevNextButtons, NextButton as NB } from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'
import useEmblaCarousel from 'embla-carousel-react'

const NextButton = () => {
  const { options, carouselPlugins } = useCarouselContext()
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return <NB onClick={onNextButtonClick} disabled={nextBtnDisabled} />
}

export default NextButton
