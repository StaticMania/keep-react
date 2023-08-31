export const checkboxGroupApiData = [
  {
    id: 1,
    propsName: "checkboxType",
    propsType: ["square", "circle"],
    propsDescription:
      "Specifies the type of checkbox style: square or circular.",
    default: "square",
  },
  {
    id: 2,
    propsName: "checkboxPosition",
    propsType: ["left", "right"],
    propsDescription:
      "Specifies the position of the checkbox relative to the label.",
    default: "left",
  },
  {
    id: 3,
    propsName: "title",
    propsType: "string",
    propsDescription: "Main title or label for the checkbox group.",
    default: "Static Design System",
  },
  {
    id: 4,
    propsName: "description",
    propsType: "string",
    propsDescription:
      "Additional description or information about the checkbox group.",
    default: "The largest UI kit...",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "Optional icon displayed alongside the checkbox group.",
    default: "None",
  },
  {
    id: 6,
    propsName: "img",
    propsType: "string",
    propsDescription: "URL of an image displayed alongside the checkbox group.",
    default: "URL",
  },
  {
    id: 7,
    propsName: "imgShape",
    propsType: ["square", "circle"],
    propsDescription: "Specifies the shape of the image: square or circular.",
    default: "circle",
  },
  {
    id: 10,
    propsName: "value",
    propsType: "string",
    propsDescription: "Value of the currently selected checkbox.",
    default: "selected",
  },
  {
    id: 11,
    propsName: "selected",
    propsType: "string",
    propsDescription: "Value of the pre-selected checkbox, if any.",
    default: "selected",
  },
  {
    id: 12,
    propsName: "onOptionChange",
    propsType: "(e: ChangeEvent) => void",
    propsDescription: "Callback function when a checkbox option is changed.",
    default: "function",
  },
];
