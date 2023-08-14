import type { FC } from "react";
import TooltipSlider from "./ToolTipSlider";
import { excludeClassName } from "@/src/helpers/exclude";

export interface MarkObj {
  [key: number]: string | number;
}

export interface SliderProps {
  /**
   * Slider Mimimum Number
   */
  min: number;
  /**
   * Slider Mimimum Number
   */
  max: number;
  /**
   * Step Size
   */
  step?: number | null;
  /**
   * Slider Range color show or not?
   */
  range?: boolean;
  /**
   * Slider dots show or not?
   */
  dots?: boolean;
  /**
   * Slider every point mark
   */
  marks?: MarkObj;
  /**
   * Slider show from oposite side or not?
   */
  reverse?: boolean;
  /**
   * Slider is disabled or not?
   */
  disabled?: boolean;
  /**
   * Slider is pushable or not?
   */
  pushable?: boolean | number;
  /**
   * Slider is allowcross or not?
   */
  allowCross?: boolean;
  /**
   * Slider is draggableTrack or not?
   */
  draggableTrack?: boolean;
  /**
   * Slider is default Value
   */
  defaultValue: number | number[];
  /**
   * Slider onchange handler
   */
  onChange?: (value: number | number[]) => void;
  /**
   * Slider tooltip avaiable position
   */
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
        tipFormatter={(value) => `${value}`}
        onChange={onChange}
        marks={{ ...marks }}
        step={step}
        {...theirProps}
      />
    </div>
  );
};
