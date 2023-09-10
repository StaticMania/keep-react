"use client";
import Image from "next/image";
import { Carousel } from "~/src";

const DefaultCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
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
const DefaultCarouselCode = `
"use client";
import { Carousel } from "keep-react";
import Image from "next/image";

const DefaultCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
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

export default DefaultCarousel;

`;
export { DefaultCarousel, DefaultCarouselCode };
