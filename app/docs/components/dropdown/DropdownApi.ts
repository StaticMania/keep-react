export const dropdownAPIData = [
  {
    id: 1,
    propsName: "placement",
    propsType: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end",
    ],
    propsDescription: "Defines the placement of the dropdown.",
    default: "bottom-start",
  },
  {
    id: 2,
    propsName: "trigger",
    propsType: ["hover", "click"],
    propsDescription: "Specifies the trigger behavior for the dropdown.",
    default: "click",
  },
  {
    id: 3,
    propsName: "label",
    propsType: "string",
    propsDescription: "The content to display within the dropdown.",
    default: "Dropdown Button",
  },

  {
    id: 4,
    propsName: "floatingArrow",
    propsType: "boolean",
    propsDescription:
      "Enables or disables the floating arrow within the dropdown.",
    default: "false",
  },
  {
    id: 5,
    propsName: "arrowIcon",
    propsType: "boolean",
    propsDescription: "Enables or disables the arrow icon.",
    default: "true",
  },
];
