export const radioApiData = [
  {
    id: 1,
    propsName: "sizing",
    propsType: ["sm", "md", "lg"],
    propsDescription: "Sets the size of the radio input component.",
    default: "lg",
  },
  {
    id: 2,
    propsName: "checkedIcon",
    propsType: "boolean",
    propsDescription:
      "Indicates whether to show a checked icon when the radio input is selected.",
    default: "false",
  },
  {
    id: 3,
    propsName: "radioShape",
    propsType: ["circle", "square"],
    propsDescription:
      "Specifies the shape of the radio input, either circle or square.",
    default: "circle",
  },
  {
    id: 4,
    propsName: "value",
    propsType: "string",
    propsDescription: "Value associated with the radio input.",
    default: "None",
  },
  {
    id: 5,
    propsName: "selected",
    propsType: "string",
    propsDescription: "Currently selected value in a group of radio inputs.",
    default: "None",
  },
  {
    id: 6,
    propsName: "onOptionChange",
    propsType: "() => void",
    propsDescription: "Callback function when the radio option changes.",
    default: "None",
  },
];
