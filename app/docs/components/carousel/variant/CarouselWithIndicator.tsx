/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "@/src/components";
import Image from "next/image";

const CarouselWithIndicator = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicatorsType="ring" indicators={true}>
        <Image
          src="/images/banner/slider-1.jpg"
          alt="slider-1"
          height={400}
          width={910}
        />
        <Image
          src="/images/banner/slider-2.jpg"
          alt="slider-2"
          height={400}
          width={910}
        />
        <Image
          src="/images/banner/slider-3.jpg"
          alt="slider-3"
          height={400}
          width={910}
        />
        <Image
          src="/images/banner/slider-4.jpg"
          alt="slider-4"
          height={400}
          width={910}
        />
      </Carousel>
    </div>
  );
};

const CarouselWithIndicatorCode = `
"use client";
import { Carousel } from "keep-react";
import Image from "next/image";

const CarouselWithIndicator = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicatorsType="ring" indicators={true}>
        <img src="/images/banner/slider-1.jpg" alt="..." />
        <img src="/images/banner/slider-2.jpg" alt="..." />
        <img src="/images/banner/slider-3.jpg" alt="..." />
        <img src="/images/banner/slider-4.jpg" alt="..." />
      </Carousel>
    </div>
  );
};

export default CarouselWithIndicator;

`;

export { CarouselWithIndicator, CarouselWithIndicatorCode };
