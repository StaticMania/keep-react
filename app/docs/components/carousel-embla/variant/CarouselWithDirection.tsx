'use client'

import { CarouselEmbla } from '~/app/src/components/Carousel-Embla/Carousel-Embla'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'
import Image from 'next/image'

function CarouselWithDirection() {
  return (
    <CarouselEmbla className="h-60" axis="y" indicatorsPosition="left">
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </CarouselEmbla>
  )
}

const CarouselWithDirectionCode = `
"use client";
import Image from "next/image";
import { CarouselEmbla } from "keep-react";

export const CarouselComponent = () => {
  return (
    // Never forget to  set a height when axis is set to y
    <CarouselEmbla className="h-60" axis="y" indicatorsPosition="left">
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </CarouselEmbla>
  )
}
`

export { CarouselWithDirection, CarouselWithDirectionCode }
