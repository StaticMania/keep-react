export const checkboxGroupApiData = [
  {
    id: 1,
    propsName: "checkboxType",
    propsType: '"square" | "circle"',
    propsDescription:
      "Specifies the type of checkbox style: square or circular.",
  },
  {
    id: 2,
    propsName: "checkboxPosition",
    propsType: '"left" | "right"',
    propsDescription:
      "Specifies the position of the checkbox relative to the label.",
  },
  {
    id: 3,
    propsName: "title",
    propsType: "string",
    propsDescription: "Main title or label for the checkbox group.",
  },
  {
    id: 4,
    propsName: "description",
    propsType: "string",
    propsDescription:
      "Additional description or information about the checkbox group.",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "Optional icon displayed alongside the checkbox group.",
  },
  {
    id: 6,
    propsName: "img",
    propsType: "string",
    propsDescription: "URL of an image displayed alongside the checkbox group.",
  },
  {
    id: 7,
    propsName: "imgShape",
    propsType: '"square" | "circle"',
    propsDescription: "Specifies the shape of the image: square or circular.",
  },
  {
    id: 8,
    propsName: "fieldName",
    propsType: "string",
    propsDescription: "Name attribute for the checkboxes within the group.",
  },
  {
    id: 9,
    propsName: "select",
    propsType: '"single" | "multiple"',
    propsDescription:
      "Specifies whether single or multiple selections are allowed.",
  },
  {
    id: 10,
    propsName: "value",
    propsType: "string",
    propsDescription: "Value of the currently selected checkbox.",
  },
  {
    id: 11,
    propsName: "selected",
    propsType: "string",
    propsDescription: "Value of the pre-selected checkbox, if any.",
  },
  {
    id: 12,
    propsName: "onOptionChange",
    propsType: "(e: ChangeEvent) => void",
    propsDescription: "Callback function when a checkbox option is changed.",
  },
];
