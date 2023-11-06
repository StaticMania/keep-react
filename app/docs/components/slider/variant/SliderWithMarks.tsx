"use client";
import { Slider } from "~/src";

const SliderWithMarks = () => {
  return (
    <div className="h-16 p-4 w-5/6">
      <Slider
        defaultValue={300}
        marks={{
          "200": "200",
          "500": "500",
          "800": "800",
          "1000": 1000,
        }}
        max={1000}
        min={100}
        onChange={(value: number | number[]) => console.log(value)}
        step={100}
      />
    </div>
  );
};

const SliderWithMarksCode = `
"use client";
import { Slider } from "keep-react";

export const SliderComponent = () => {
  return (
    <Slider
      defaultValue={300}
      marks={{
        "200": "200",
        "500": "500",
        "800": "800",
        "1000": 1000,
      }}
      max={1000}
      min={100}
      onChange={(value) => console.log(value)}
      step={100}
    />
  );
}
`;

export { SliderWithMarks, SliderWithMarksCode };
