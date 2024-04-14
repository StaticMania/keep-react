import React, { ReactNode } from 'react'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import { carouselTheme } from './theme'
import Slides from './Slides'
import Item from './Item'
import Control from './Control'
import Buttons from './Buttons'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import CarouselContext from './CarouselContext'
import Indicators from './Indicators'
import ViewPort from './Viewport'
import useEmblaCarousel from 'embla-carousel-react'
type PropType = {
  children: ReactNode
  options?: EmblaOptionsType
  carouselPlugins?: EmblaPluginType[]
  carouselViewportClasses?: String
}

const CarouselComponent: React.FC<PropType> = ({ children, options, carouselPlugins, carouselViewportClasses }) => {
  const theme = carouselTheme
  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins)
  return (
    <div className={theme.carouselContainer}>
      <CarouselContext.Provider value={{ emblaApi, emblaRef }}>
        <ViewPort carouselViewportClasses={carouselViewportClasses}>{children}</ViewPort>
      </CarouselContext.Provider>
    </div>
  )
}

export const Carousel = Object.assign(CarouselComponent, {
  Slides,
  Item,
  Control,
  Buttons,
  PrevButton,
  NextButton,
  Indicators,
})
