'use client'
import Image from 'next/image'
import { Carousel } from '../../../../src'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'

const DefaultCarousel = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true}>
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </Carousel>
  )
}

const DefaultCarouselCode = `
"use client";
import Image from "next/image";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true}>
      <Image src="img source" alt="slider-1" />
      <Image src="img source" alt="slider-2" />
      <Image src="img source" alt="slider-3" />
      <Image src="img source" alt="slider-4" />
    </Carousel>
  )
}
`
export { DefaultCarousel, DefaultCarouselCode }
