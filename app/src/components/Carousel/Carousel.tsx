import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { carouselTheme } from './theme'
import { cn } from '../../helpers/cn'

type PropType = {
  slides: Array<ReactNode>
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const theme = carouselTheme
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className={theme.viewport} ref={emblaRef}>
        <div className={theme.item.container}>
          {slides.map((slide, index) => (
            <div className={theme.item.slide} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={theme.controls.wrapper}>
        <div className={theme.controls.button.container}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={theme.controls.indicators.container}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(theme.controls.indicators.dot, index === selectedIndex && 'border-gray-600')}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel
