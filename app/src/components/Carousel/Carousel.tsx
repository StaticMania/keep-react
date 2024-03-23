import React, { ReactNode } from 'react'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { carouselTheme } from './theme'
import { cn } from '../../helpers/cn'

type PropType = {
  slides: Array<ReactNode>
  slideClass?: string
  slideContainerClasses?: string
  carouselViewportClasses?: string
  carouselPlugins?: Array<EmblaPluginType>
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = ({
  slides,
  options,
  slideClass,
  slideContainerClasses,
  carouselViewportClasses,
  carouselPlugins,
}) => {
  const theme = carouselTheme
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className={cn(theme.viewport, carouselViewportClasses)} ref={emblaRef}>
        <div className={cn(theme.item.container, slideContainerClasses)}>
          {slides.map((slide, index) => (
            <div className={cn(theme.item.slide, slideClass)} key={index}>
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
