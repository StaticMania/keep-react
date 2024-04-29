'use client'
import { PrevButton as PrevBtn, usePrevNextButtons } from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const CarouselPrevButton = () => {
  const { emblaApi } = useCarouselContext()
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi)
  return <PrevBtn onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
}
