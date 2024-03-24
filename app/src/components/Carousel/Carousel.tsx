import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React, { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'

type PropType = {
  slides: Array<ReactNode>
  slideClass?: string
  slideContainerClasses?: string
  carouselViewportClasses?: string
  carouselPlugins?: Array<EmblaPluginType>
  options?: EmblaOptionsType
  className?: string
}

export const Carousel: React.FC<PropType> = ({
  slides,
  options,
  slideClass,
  slideContainerClasses,
  carouselViewportClasses,
  carouselPlugins,
  className,
}) => {
  const theme = carouselTheme
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={className}>
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
    </div>
  )
}
