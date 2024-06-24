import classNames from 'embla-carousel-class-names'
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

const CarouselWithClassNames = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[classNames()]}>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={`https://picsum.photos/700/350?v=${slide}`} alt="Carousel Item" />
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

const CarouselWithClassNamesCode = `
'use client'
import classNames from 'embla-carousel-class-names'
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

export const CarouselComponent = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[classNames()]}>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={"https://picsum.photos/700/350?v=1"} alt="Carousel Item" />
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

export { CarouselWithClassNames, CarouselWithClassNamesCode }
