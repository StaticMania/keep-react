import React, { ReactNode, FC } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '../../helpers/cn'
import { carouselTheme } from './theme'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'

type CarouselViewportTypes = {
  children: ReactNode
  carouselViewportClasses?: string
  carouselPlugins?: Array<EmblaPluginType>
  options?: EmblaOptionsType
}

const CarouselViewport: FC<CarouselViewportTypes> = ({
  children,
  carouselViewportClasses,
  carouselPlugins,
  options,
}) => {
  const theme = carouselTheme
  const [emblaRef] = useEmblaCarousel(options, carouselPlugins)
  return (
    <div className={cn(theme.viewport, carouselViewportClasses)} ref={emblaRef}>
      {children}
    </div>
  )
}

export default CarouselViewport
