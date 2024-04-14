import React from 'react'
import { usePrevNextButtons, NextButton as NB } from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

const NextButton = () => {
  const { emblaApi } = useCarouselContext()

  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return <NB onClick={onNextButtonClick} disabled={nextBtnDisabled} />
}

export default NextButton
