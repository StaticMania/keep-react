export const toggleApiData = [
  {
    id: 1,
    propsName: "label",
    propsType: "ReactNode",
    propsDescription: "Label or content displayed alongside the toggle.",
    default: "None",
  },
  {
    id: 2,
    propsName: "withIcon",
    propsType: "Boolean",
    propsDescription:
      "Indicates if an icon should be included with the toggle.",
    default: "false",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "Boolean",
    propsDescription: "Disables interactions with the toggle.",
    default: "false",
  },
  {
    id: 4,
    propsName: "size",
    propsType: ["sm", "md", "lg"],
    propsDescription: "Determines the size variant of the toggle.",
    default: "md",
  },
  {
    id: 5,
    propsName: "bgColor",
    propsType: ["primary", "slate"],
    propsDescription: "Sets the background color variant of the toggle.",
    default: "primary",
  },
  {
    id: 6,
    propsName: "onChange",
    propsType: "function",
    propsDescription: "onChange is called when the toggle enabled",
    default: "()=> void",
  },
];
