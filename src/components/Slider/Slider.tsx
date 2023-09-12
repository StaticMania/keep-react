import type { FC } from "react";
import { TooltipSlider } from "./ToolTipSlider";
import { excludeClassName } from "../../helpers/exclude";

export interface MarkObj {
  [key: number]: string | number;
}

export interface SliderProps {
  min: number;
  max: number;
  step?: number | null;
  range?: boolean;
  dots?: boolean;
  marks?: MarkObj;
  reverse?: boolean;
  disabled?: boolean;
  pushable?: boolean | number;
  allowCross?: boolean;
  draggableTrack?: boolean;
  defaultValue: number | number[];
  onChange?: (value: number | number[]) => void;
  tooltip?: "top" | "bottom" | "none";
}

export const Slider: FC<SliderProps> = ({
  min,
  max,
  step,
  defaultValue,
  range,
  marks = {},
  pushable,
  dots = false,
  disabled = false,
  reverse = false,
  allowCross = false,
  draggableTrack = false,
  tooltip = "none",
  onChange,
  ...props
}) => {
  const theirProps = excludeClassName(props);

  return (
    <div>
      <TooltipSlider
        range={range}
        min={min}
        max={max}
        dots={dots}
        reverse={reverse}
        pushable={pushable}
        disabled={disabled}
        allowCross={allowCross}
        draggableTrack={draggableTrack}
        defaultValue={defaultValue}
        tipProps={{ placement: tooltip }}
        tipFormatter={(value: any) => `${value}`}
        onChange={onChange}
        marks={{ ...marks }}
        step={step}
        {...theirProps}
      />
    </div>
  );
};
