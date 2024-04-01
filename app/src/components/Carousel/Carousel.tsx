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
type PropType = {
  children: ReactNode
  options?: EmblaOptionsType
  carouselPlugins?: EmblaPluginType[]
}

const CarouselComponent: React.FC<PropType> = ({ children, ...props }) => {
  const theme = carouselTheme

  return (
    <div className={theme.carouselContainer}>
      <CarouselContext.Provider value={props}>{children}</CarouselContext.Provider>
    </div>
  )
}

export const Carousel = Object.assign(CarouselComponent, {
  ViewPort,
  Slides,
  Item,
  Control,
  Buttons,
  PrevButton,
  NextButton,
  Indicators,
})
