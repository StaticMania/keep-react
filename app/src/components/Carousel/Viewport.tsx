import React, { ReactNode, FC } from 'react'
import { cn } from '../../helpers/cn'
import { carouselTheme } from './theme'
import { useCarouselContext } from './CarouselContext'

type CarouselViewportTypes = {
  children: ReactNode
  carouselViewportClasses?: String
}

const CarouselViewport: FC<CarouselViewportTypes> = ({ children, carouselViewportClasses }) => {
  const theme = carouselTheme
  const { emblaRef } = useCarouselContext()
  return (
    <div className={cn(theme.viewport, carouselViewportClasses)} ref={emblaRef}>
      {children}
    </div>
  )
}

export default CarouselViewport
