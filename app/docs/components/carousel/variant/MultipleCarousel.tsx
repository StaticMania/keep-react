'use client'
import Image from 'next/image'
import { Carousel } from '~/src'

const MultipleCarousel = () => {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel showControls={false} indicatorsType="ring" indicatorsTypeColors="slate">
        <Image
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        />
      </Carousel>
      <Carousel showControls={false} indicatorsType="ring" indicatorsTypeColors="slate">
        <Image
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        />
      </Carousel>
    </div>
  )
}

const MultipleCarouselCode = `
"use client";
import Image from "next/image";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <Image
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        />
      </Carousel>
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <Image
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          height={384}
          width={440}
        />
        <Image
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        />
      </Carousel>
    </div>
  );
}
`

export { MultipleCarousel, MultipleCarouselCode }
