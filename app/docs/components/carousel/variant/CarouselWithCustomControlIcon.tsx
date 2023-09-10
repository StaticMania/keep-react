"use client";
import Image from "next/image";
import { Carousel } from "~/src";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";

const CarouselWithCustomControlIcon = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        showControls={true}
        leftControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineLeft size={20} weight="bold" color="white" />
          </span>
        }
        rightControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineRight size={20} weight="bold" color="white" />
          </span>
        }
      >
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

const CarouselWithCustomControlIconCode = `
"use client";
import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import Image from "next/image";

const CarouselWithCustomControlIcon = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        showControls={true}
        leftControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineLeft size={20} weight="bold" color="white" />
          </span>
        }
        rightControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
            <ArrowLineRight size={20} weight="bold" color="white" />
          </span>
        }
      >
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

export default CarouselWithCustomControlIcon;

`;

export { CarouselWithCustomControlIcon, CarouselWithCustomControlIconCode };
