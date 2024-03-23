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
      <Image fill src={src} alt={'img' + idx} className="w-full object-cover" />
    </div>
  ))
  return <Carousel slides={slides} />
}

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
