import { EmblaCarouselType } from 'embla-carousel'
import { createContext, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
type EmblaViewportRefType = <ViewportElement extends HTMLElement>(instance: ViewportElement | null) => void
type CaourselContextPropTypes = {
  emblaApi: EmblaCarouselType | undefined
  emblaRef: EmblaViewportRefType
}

// eslint-disable-next-line no-undef
const CarouselContext = createContext<CaourselContextPropTypes | undefined>(undefined)

export function useCarouselContext() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext should be used within the CarouselContext provider!')
  }

  return context
}

export default CarouselContext
