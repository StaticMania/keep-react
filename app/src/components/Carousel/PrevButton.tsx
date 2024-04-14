import React from 'react'
import { useCarouselContext } from './CarouselContext'
import { usePrevNextButtons, PrevButton as PB } from './CarouselArrowButtons'

const PrevButton = () => {
  const { emblaApi } = useCarouselContext()

  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi)
  return <PB onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
}

export default PrevButton
