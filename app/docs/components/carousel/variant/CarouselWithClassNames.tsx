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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={`https://picsum.photos/700/350?v=${index}`} alt="Carousel Item" />
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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={"https://picsum.photos/600/350?v=1"} alt="Carousel Item" />
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
