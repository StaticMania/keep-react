'use client'
import { Carousel } from '../../../../src'

const DefaultCarousel = () => {
  return (
    <Carousel>
      <Carousel.Slides>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
              <h1 className="text-heading-1 font-medium text-metal-900">{index + 1}</h1>
            </div>
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

const DefaultCarouselCode = `
'use client'
import { Carousel } from 'keep-react'

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Slides>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
              <h1 className="text-heading-1 font-medium text-metal-900">{index + 1}</h1>
            </div>
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
export { DefaultCarousel, DefaultCarouselCode }
