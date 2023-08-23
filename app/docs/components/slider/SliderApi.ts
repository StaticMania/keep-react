export const sliderAPIData = [
  {
    id: 1,
    propsName: "min",
    propsType: "number",
    propsDescription: "Minimum value of the slider.",
  },
  {
    id: 2,
    propsName: "max",
    propsType: "number",
    propsDescription: "Maximum value of the slider.",
  },
  {
    id: 3,
    propsName: "step",
    propsType: "number | null",
    propsDescription:
      "Step size for each increment on the slider. Can be null.",
  },
  {
    id: 4,
    propsName: "range",
    propsType: "boolean",
    propsDescription: "Determines whether the slider displays a range color.",
  },
  {
    id: 5,
    propsName: "dots",
    propsType: "boolean",
    propsDescription: "Determines whether dots are displayed on the slider.",
  },
  {
    id: 6,
    propsName: "marks",
    propsType: "Object",
    propsDescription: "Defines points on the slider with custom labels.",
  },
  {
    id: 7,
    propsName: "reverse",
    propsType: "boolean",
    propsDescription: "Determines if the slider values are shown in reverse.",
  },
  {
    id: 8,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Determines if the slider is disabled.",
  },
  {
    id: 9,
    propsName: "pushable",
    propsType: "boolean | number",
    propsDescription:
      "Allows pushing neighboring handles. Can be boolean or number.",
  },
  {
    id: 10,
    propsName: "allowCross",
    propsType: "boolean",
    propsDescription: "Allows the handles to cross each other on the slider.",
  },
  {
    id: 11,
    propsName: "draggableTrack",
    propsType: "boolean",
    propsDescription: "Allows dragging the entire track to set values.",
  },
  {
    id: 12,
    propsName: "defaultValue",
    propsType: "number | number[]",
    propsDescription: "Initial default value or values for the slider.",
  },
  {
    id: 13,
    propsName: "onChange",
    propsType: "(value: number | number[]) => void",
    propsDescription: "Callback function when the slider value changes.",
  },
  {
    id: 14,
    propsName: "tooltip",
    propsType: '"top" | "bottom" | "none"',
    propsDescription: "Specifies the position of the tooltip or hides it.",
  },
];
