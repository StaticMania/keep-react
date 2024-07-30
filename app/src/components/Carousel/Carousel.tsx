'use client'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { CarouselButtons } from './Buttons'
import { CarouselNextButton, CarouselPrevButton } from './CarouselArrowButtons'
import { CarouselContext } from './CarouselContext'
import { CarouselControl } from './Control'
import { CarouselIndicators } from './Indicators'
import { CarouselItem } from './Item'
import { CarouselSlides } from './Slides'
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
  Slides: CarouselSlides,
  Item: CarouselItem,
  Control: CarouselControl,
  Buttons: CarouselButtons,
  PrevButton: CarouselPrevButton,
  NextButton: CarouselNextButton,
  Indicators: CarouselIndicators,
})
