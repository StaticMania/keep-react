'use client'

import { CarouselEmbla, useCarouselControls } from '~/app/src/components/Carousel-Embla/Carousel-Embla'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'
import Image from 'next/image'
import { Button } from '~/app/src'

function CarouselWithApi() {
  const { carousel, setCarousel } = useCarouselControls()
  return (
    <div className="space-y-5">
      <CarouselEmbla slidesToScroll={2} slidesPerView={2} align="start" setCarousel={setCarousel}>
        <Image src={CarouselOne} alt="slider-1" />
        <Image src={CarouselTwo} alt="slider-2" />
        <Image src={CarouselThree} alt="slider-3" />
        <Image src={CarouselFour} alt="slider-4" />
        <Image src={CarouselOne} alt="slider-5" />
        <Image src={CarouselTwo} alt="slider-6" />
        <Image src={CarouselThree} alt="slider-7" />
        <Image src={CarouselFour} alt="slider-8" />
      </CarouselEmbla>
      <div className="flex justify-center gap-5">
        <Button size="xs" onClick={() => carousel?.scrollPrev()}>
          Prev Slide
        </Button>
        <Button size="xs" onClick={() => carousel?.scrollNext()}>
          Next Slide
        </Button>
      </div>
    </div>
  )
}

const CarouselWithApiCode = `
"use client";
import Image from "next/image";
import { CarouselEmbla, useCarouselControls } from "keep-react";

export const CarouselComponent = () => {
const { carousel, setCarousel } = useCarouselControls()
  return (
    <div className="space-y-5">
      <CarouselEmbla slidesToScroll={2} slidesPerView={2} align="start" setCarousel={setCarousel}>
        <Image src={CarouselOne} alt="slider-1" />
        <Image src={CarouselTwo} alt="slider-2" />
        <Image src={CarouselThree} alt="slider-3" />
        <Image src={CarouselFour} alt="slider-4" />
        <Image src={CarouselOne} alt="slider-5" />
        <Image src={CarouselTwo} alt="slider-6" />
        <Image src={CarouselThree} alt="slider-7" />
        <Image src={CarouselFour} alt="slider-8" />
      </CarouselEmbla>
      <div className="flex justify-center gap-5">
        <Button size="xs" onClick={() => carousel?.scrollPrev()}>
          Prev Slide
        </Button>
        <Button size="xs" onClick={() => carousel?.scrollNext()}>
          Next Slide
        </Button>
      </div>
    </div>
  )
}
`

export { CarouselWithApi, CarouselWithApiCode }
