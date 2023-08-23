/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "@/src/components/Carousel";
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
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

const CarouselWithCustomControlIconCode = `
"use client";
import { Carousel } from "keep-design";
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
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselWithCustomControlIcon;

`;

export { CarouselWithCustomControlIcon, CarouselWithCustomControlIconCode };
