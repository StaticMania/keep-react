"use client";
import { Carousel } from "@/src/components";
import Image from "next/image";

const StaticCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
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

const StaticCarouselCode = `
"use client";
import { Carousel } from "keep-react";
import Image from "next/image";

const StaticCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
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

export default StaticCarousel;
`;

export { StaticCarousel, StaticCarouselCode };
