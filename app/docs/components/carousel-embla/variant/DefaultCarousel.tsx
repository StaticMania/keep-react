'use client'

import { CarouselEmbla } from '~/app/src/components/Carousel-Embla/Carousel-Embla'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'
import Image from 'next/image'

function DefaultCarousel() {
  return (
    <CarouselEmbla>
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </CarouselEmbla>
  )
}

const DefaultCarouselCode = `
"use client";
import Image from "next/image";
import { CarouselEmbla } from "keep-react";

export const CarouselComponent = () => {
  return (
    <CarouselEmbla>
      <Image src="img source" alt="slider-1" />
      <Image src="img source" alt="slider-2" />
      <Image src="img source" alt="slider-3" />
      <Image src="img source" alt="slider-4" />
    </CarouselEmbla>
  )
}
`

export { DefaultCarousel, DefaultCarouselCode }
