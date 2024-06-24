'use client'
import { NextButton as NextBtn, usePrevNextButtons } from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const CarouselNextButton = () => {
  const { emblaApi } = useCarouselContext()
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return <NextBtn onClick={onNextButtonClick} disabled={nextBtnDisabled} />
}
