"use client";
import { Carousel } from "@/src/components";

const MultipleCarousel = () => {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 3
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 4
        </div>
      </Carousel>
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 3
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 4
        </div>
      </Carousel>
    </div>
  );
};
const MultipleCarouselCode = `

"use client";
import { Carousel } from "keep-react";

const MultipleCarousel = () => {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 3
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 4
        </div>
      </Carousel>
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 3
        </div>
        <div className="flex h-full items-center justify-center bg-slate-600">
          Slide 4
        </div>
      </Carousel>
    </div>
  );
};

export default MultipleCarousel;
`;

export { MultipleCarousel, MultipleCarouselCode };
