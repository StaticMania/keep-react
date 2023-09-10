"use client";
import { Slider } from "~/src";

const SliderTooltipPosition = () => {
  return (
    <div className="p-4">
      <Slider
        defaultValue={300}
        max={1000}
        min={100}
        onChange={(value: number | number[]) => console.log(value)}
        step={100}
        tooltip="bottom"
      />
    </div>
  );
};

const SliderTooltipPositionCode = `
"use client";
import { Slider } from "keep-react";
const SliderTooltipPosition = () => {
  return (
    <Slider
      defaultValue={300}
      max={1000}
      min={100}
      onChange={(value) => console.log(value)}
      step={100}
      tooltip="bottom"
    />
  );
};
export default SliderTooltipPosition;
`;

export { SliderTooltipPosition, SliderTooltipPositionCode };
