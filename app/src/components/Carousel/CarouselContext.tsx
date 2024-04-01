import { createContext, useContext } from 'react'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
type CarouselContextProptypes = {
  options?: EmblaOptionsType
  carouselPlugins?: EmblaPluginType[]
}

const CarouselContext = createContext<CarouselContextProptypes>({})

export function useCarouselContext(): CarouselContextProptypes {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext should be used within the CarouselContext provider!')
  }

  return context
}

export default CarouselContext
