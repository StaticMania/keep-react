'use client'

import { CarouselEmbla } from '~/app/src/components/Carousel-Embla/Carousel-Embla'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Slider } from '~/app/src'

function CarouselWithSlidesPerView() {
  const [slides, setSlides] = useState(2)
  return (
    <div className="space-y-4">
      <div className="w-60">
        <span className="text-slate-700">Slides per view</span>
        <Slider defaultValue={2} min={1} max={3} onChange={(e: any) => setSlides(e)} />
      </div>
      <CarouselEmbla slidesPerView={slides} align="start">
        <Image src={CarouselOne} alt="slider-1" />
        <Image src={CarouselTwo} alt="slider-2" />
        <Image src={CarouselThree} alt="slider-3" />
        <Image src={CarouselFour} alt="slider-4" />
      </CarouselEmbla>
    </div>
  )
}

const CarouselWithSlidesPerViewCode = `
"use client";
import Image from "next/image";
import { CarouselEmbla } from "keep-react";

export const CarouselComponent = () => {
  return (
    <CarouselEmbla slidesPerView={2}>
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </CarouselEmbla>
  )
}
`

export { CarouselWithSlidesPerView, CarouselWithSlidesPerViewCode }
