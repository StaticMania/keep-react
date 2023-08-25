"use client";
import { Slider } from "@/src/components/Slider";

const SliderWithDots = () => {
  return (
    <Slider
      defaultValue={300}
      dots={true}
      max={1000}
      min={100}
      onChange={(value: number | number[]) => console.log(value)}
      step={200}
    />
  );
};

const SliderWithDotsCode = `
"use client";
import { Slider } from "keep-design";

const SliderWithDots = () => {
  return (
    <Slider
      defaultValue={300}
      dots={true}
      max={1000}
      min={100}
      onChange={(value: number | number[]) => console.log(value)}
      step={200}
    />
  );
};

export default SliderWithDots;
`;

export { SliderWithDots, SliderWithDotsCode };