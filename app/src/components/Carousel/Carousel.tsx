'use client'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { Buttons } from './Buttons'
import { CarouselContext } from './CarouselContext'
import { Control } from './Control'
import { Indicators } from './Indicators'
import { Item } from './Item'
import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { Slides } from './Slides'
import { CarouselViewport } from './Viewport'
import { carouselTheme } from './theme'

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  carouselViewportClasses?: string
}

const CarouselComponent = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, options, plugins, className, carouselViewportClasses }: CarouselProps, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    return (
      <div className={cn(theme.carouselContainer, className)} ref={ref}>
        <CarouselContext.Provider value={{ emblaApi, emblaRef }}>
          <CarouselViewport className={carouselViewportClasses}>{children}</CarouselViewport>
        </CarouselContext.Provider>
      </div>
    )
  },
)

CarouselComponent.displayName = 'Carousel'

export const Carousel = Object.assign(CarouselComponent, {
  Slides,
  Item,
  Control,
  Buttons,
  PrevButton,
  NextButton,
  Indicators,
})
