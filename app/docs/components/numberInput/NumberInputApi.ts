export const numberInputApiData = [
  {
    id: 1,
    propsName: "value",
    propsType: "number",
    propsDescription: "Value of the number input field.",
    default: "0",
  },
  {
    id: 2,
    propsName: "sizing",
    propsType: ["sm", "md", "lg"],
    propsDescription: "Sets the size of the number input component.",
    default: "md",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disables interactions with the number input component.",
    default: "false",
  },
  {
    id: 4,
    propsName: "helperText",
    propsType: "ReactNode",
    propsDescription:
      "Additional helper text or information related to the number input.",
    default: "None",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "Icon displayed within the number input component.",
    default: "ReactNode",
  },
  {
    id: 6,
    propsName: "iconPosition",
    propsType: ["right", "left"],
    propsDescription:
      "Specifies the position of the icon within the number input.",
    default: "right",
  },
  {
    id: 7,
    propsName: "setValue",
    propsType: "function",
    propsDescription:
      "Setter function to update the value of the number input.",
    default: "None",
  },
];
