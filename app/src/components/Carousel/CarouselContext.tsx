'use client'
import { EmblaCarouselType } from 'embla-carousel'
import { createContext, useContext } from 'react'

type EmblaViewportRefType = <ViewportElement extends HTMLElement>(instance: ViewportElement | null) => void

type CarouselContextPropTypes = {
  emblaApi: EmblaCarouselType | undefined
  emblaRef: EmblaViewportRefType
}

export const CarouselContext = createContext<CarouselContextPropTypes | undefined>(undefined)

export function useCarouselContext() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext should be used within the CarouselContext provider!')
  }

  return context
}
