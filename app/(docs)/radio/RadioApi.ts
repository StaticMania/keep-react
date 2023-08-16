export const radioApiData = [
  {
    id: 1,
    propsName: "sizing",
    propsType: "string",
    propsDescription:
      "Sets the size of the radio input component.(sm | md | lg)",
  },
  {
    id: 2,
    propsName: "checkedIcon",
    propsType: "boolean",
    propsDescription:
      "Indicates whether to show a checked icon when the radio input is selected.",
  },
  {
    id: 3,
    propsName: "radioShape",
    propsType: '"circle" | "square"',
    propsDescription:
      "Specifies the shape of the radio input, either circle or square.",
  },
  {
    id: 4,
    propsName: "value",
    propsType: "string",
    propsDescription: "Value associated with the radio input.",
  },
  {
    id: 5,
    propsName: "selected",
    propsType: "string",
    propsDescription: "Currently selected value in a group of radio inputs.",
  },
  {
    id: 6,
    propsName: "onOptionChange",
    propsType: "(e: ChangeEvent) => void",
    propsDescription: "Callback function when the radio option changes.",
  },
  {
    id: 7,
    propsName: "children",
    propsType: "ReactNode",
    propsDescription:
      "Child components and content to be placed within the radio input component.",
  },
];
