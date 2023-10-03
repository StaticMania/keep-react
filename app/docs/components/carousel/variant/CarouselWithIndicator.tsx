"use client";
import { Carousel } from "~/src";
import Image from "next/image";

const CarouselWithIndicator = () => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicatorsType="ring" indicators={true}>
        <Image
          src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
          alt="slider-1"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
          alt="slider-2"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
          alt="slider-3"
          height={400}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
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
        <img src="https://images.prismic.io/staticmania/d1bfb4f8-ee1d-44c6-be78-9662656e0210_slider-1.jpg?auto=compress,format" alt="..." />
        <img src="https://images.prismic.io/staticmania/97813c41-9011-437b-a418-7b1afd1f939f_slider-4.jpg?auto=compress,format" alt="..." />
        <img src="https://images.prismic.io/staticmania/107cb557-9589-4ffc-bbd7-543c6f4c2533_slider-3.jpg?auto=compress,format" alt="..." />
        <img src="https://images.prismic.io/staticmania/b651e511-0c29-4b4c-85b6-a10919282f88_slider-2.jpg?auto=compress,format" alt="..." />
      </Carousel>
    </div>
  );
};

export default CarouselWithIndicator;

`;

export { CarouselWithIndicator, CarouselWithIndicatorCode };
