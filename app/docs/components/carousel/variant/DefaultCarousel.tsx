import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from '../../../../src'

const DefaultCarousel = () => {
  return (
    <Carousel>
      <CarouselSlides>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20 dark:border-metal-900 dark:bg-metal-900">
              <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">{index + 1}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  )
}

const DefaultCarouselCode = `
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react'

export const CarouselComponent = () => (
  return (
    <Carousel>
      <CarouselSlides>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20 dark:border-metal-900 dark:bg-metal-900">
              <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">{index + 1}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  )
}

`
export { DefaultCarousel, DefaultCarouselCode }
