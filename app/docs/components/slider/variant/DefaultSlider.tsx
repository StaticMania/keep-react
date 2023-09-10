"use client";
import { Slider } from "~/src";

const DefaultSlider = () => {
  return (
    <div className="p-4">
      <Slider
        range
        min={100}
        max={1000}
        defaultValue={[100, 300]}
        tooltip="top"
        draggableTrack
        onChange={(value: number | number[]) => console.log(value)}
      />
    </div>
  );
};

const DefaultSliderCode = `
"use client";
import { Slider } from "keep-react";

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
