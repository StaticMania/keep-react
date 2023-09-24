"use client";
import Image from "next/image";
import { Carousel } from "~/src";

const DefaultCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
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
const DefaultCarouselCode = `
"use client";
import { Carousel } from "keep-react";
import Image from "next/image";

const DefaultCarousel = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
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

export default DefaultCarousel;

`;
export { DefaultCarousel, DefaultCarouselCode };
