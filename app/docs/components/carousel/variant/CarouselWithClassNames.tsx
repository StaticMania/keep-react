'use client'
import classNames from 'embla-carousel-class-names'
import { Carousel } from '../../../../src'

const CarouselWithClassNames = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[classNames()]}>
      <Carousel.Slides>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={`https://picsum.photos/700/350?v=${index}`} alt="Carousel Item" />
          </Carousel.Item>
        ))}
      </Carousel.Slides>
      <Carousel.Control>
        <Carousel.Buttons>
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Carousel.Buttons>
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel>
  )
}

const CarouselWithClassNamesCode = `
'use client'
import classNames from 'embla-carousel-class-names'
import { Carousel } from 'keep-react'

export const CarouselComponent = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[classNames()]}>
      <Carousel.Slides>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={"https://picsum.photos/600/350?v=1"} alt="Carousel Item" />
          </Carousel.Item>
        ))}
      </Carousel.Slides>
      <Carousel.Control>
        <Carousel.Buttons>
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Carousel.Buttons>
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel>
  )
}
`

export { CarouselWithClassNames, CarouselWithClassNamesCode }
