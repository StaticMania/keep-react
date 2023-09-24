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
          src="https://images.prismic.io/staticmania/d1bfb4f8-ee1d-44c6-be78-9662656e0210_slider-1.jpg?auto=compress,format"
          alt="slider-1"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/97813c41-9011-437b-a418-7b1afd1f939f_slider-4.jpg?auto=compress,format"
          alt="slider-2"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/107cb557-9589-4ffc-bbd7-543c6f4c2533_slider-3.jpg?auto=compress,format"
          alt="slider-3"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/b651e511-0c29-4b4c-85b6-a10919282f88_slider-2.jpg?auto=compress,format"
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
          src="https://images.prismic.io/staticmania/d1bfb4f8-ee1d-44c6-be78-9662656e0210_slider-1.jpg?auto=compress,format"
          alt="slider-1"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/97813c41-9011-437b-a418-7b1afd1f939f_slider-4.jpg?auto=compress,format"
          alt="slider-2"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/107cb557-9589-4ffc-bbd7-543c6f4c2533_slider-3.jpg?auto=compress,format"
          alt="slider-3"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/b651e511-0c29-4b4c-85b6-a10919282f88_slider-2.jpg?auto=compress,format"
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
