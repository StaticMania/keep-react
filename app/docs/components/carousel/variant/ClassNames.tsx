'use client'
import Image, { StaticImageData } from 'next/image'
import { default as classNames } from 'embla-carousel-class-names'
import { Carousel } from '../../../../src'
import imgSrc1 from '/public/images/carousel/1.jpg'
import imgSrc2 from '/public/images/carousel/2.jpg'
import imgSrc3 from '/public/images/carousel/3.jpg'
import imgSrc4 from '/public/images/carousel/4.jpg'
import imgSrc5 from '/public/images/carousel/5.jpg'

const images: Array<StaticImageData> = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5]

const ClassNames = () => (
  <Carousel options={{ loop: true }} carouselPlugins={[classNames()]}>
    <Carousel.Slides>
      {images.map((src, index) => (
        <Carousel.Item key={index} slideClass="flex-[0_0_70%]  [&:not(.is-snapped)]:opacity-[0.16]">
          <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image fill src={src} className="w-full object-cover" alt="carousel img" />
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

const ClassNamesCode = `
'use client'
import Image, { StaticImageData } from 'next/image'
import { default as classNames } from 'embla-carousel-class-names'
import { Carousel } from 'keep-react'
import imgSrc1 from '/public/images/carousel/1.jpg'
import imgSrc2 from '/public/images/carousel/2.jpg'
import imgSrc3 from '/public/images/carousel/3.jpg'
import imgSrc4 from '/public/images/carousel/4.jpg'
import imgSrc5 from '/public/images/carousel/5.jpg'

const images: Array<StaticImageData> = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5]

const ClassNames = () => (
  <Carousel options={{ loop: true }} carouselPlugins={[classNames()]}>
    <Carousel.Slides>
      {images.map((src, index) => (
        <Carousel.Item key={index} slideClass="flex-[0_0_70%]  [&:not(.is-snapped)]:opacity-[0.16]">
          <div className="b relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image fill src={src} className="w-full object-cover" alt="carousel img" />
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
`

export { ClassNames, ClassNamesCode }
