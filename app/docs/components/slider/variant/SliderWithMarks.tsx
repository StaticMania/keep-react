"use client";
import { Slider } from "@/src/components/Slider";

const SliderWithMarks = () => {
  return (
    <div className="p-5">
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
import { Slider } from "keep-design";

const SliderWithMarks = () => {
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
      onChange={(value: number | number[]) => console.log(value)}
      step={100}
    />
  );
};

export default SliderWithMarks;
`;

export { SliderWithMarks, SliderWithMarksCode };
