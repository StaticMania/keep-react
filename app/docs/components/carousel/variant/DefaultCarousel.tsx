'use client'
import Image from 'next/image'
import { Carousel } from '~/app/src'

const DefaultCarousel = () => (
  <Carousel options={{}}>
    <Carousel.Slides>
      <Carousel.Item>
        <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image fill src={'/images/carousel/1.jpg'} alt={`img item`} className="w-full object-cover" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image fill src={'/images/carousel/2.jpg'} alt={`img item`} className="w-full object-cover" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image fill src={'/images/carousel/3.jpg'} alt={`img item`} className="w-full object-cover" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image fill src={'/images/carousel/4.jpg'} alt={`img item`} className="w-full object-cover" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image fill src={'/images/carousel/5.jpg'} alt={`img item`} className="w-full object-cover" />
        </div>
      </Carousel.Item>
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

const DefaultCarouselCode = `
'use client'
import Image from 'next/image'
import Carousel from '~/app/src/components/Carousel/Carousel'

const DefaultCarousel = () => {
  const images = [
    '/images/carousel/1.jpg',
    '/images/carousel/2.jpg',
    '/images/carousel/3.jpg',
    '/images/carousel/4.jpg',
  ]

  const slides = images.map((src, idx) => (
    <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
      <Image fill src={src} alt={'img'+idx} className="w-full object-cover" />
    </div>
  ))
  return <Carousel slides={slides} />
}
`
export { DefaultCarousel, DefaultCarouselCode }
