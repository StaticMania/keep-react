"use client";
import { Slider } from "@/src/components/Slider";

const DefaultSlider = () => {
  return (
    <Slider
      range
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      draggableTrack
      onChange={(value: number | number[]) => console.log(value)}
    />
  );
};

const DefaultSliderCode = `
"use client";
import { Slider } from "keep-design";

const DefaultSlider = () => {
  return (
    <Slider
      range
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      draggableTrack
      onChange={(value: number | number[]) => console.log(value)}
    />
  );
};

export default DefaultSlider;

`;

export { DefaultSlider, DefaultSliderCode };
