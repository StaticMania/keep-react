export const toggleApiData = [
  {
    id: 1,
    propsName: "label",
    propsType: "ReactNode",
    propsDescription: "Label or content displayed alongside the toggle.",
  },
  {
    id: 2,
    propsName: "withIcon",
    propsType: "Boolean",
    propsDescription:
      "Indicates if an icon should be included with the toggle.",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "Boolean",
    propsDescription: "Disables interactions with the toggle.",
  },
  {
    id: 4,
    propsName: "size",
    propsType: '"sm" | "md" | "lg"',
    propsDescription: "Determines the size variant of the toggle.",
  },
  {
    id: 5,
    propsName: "bgColor",
    propsType: '"primary" | "slate"',
    propsDescription: "Sets the background color variant of the toggle.",
  },
  {
    id: 6,
    propsName: "onChange",
    propsType: "(action:boolean)=> void",
    propsDescription: "onChange is called when the toggle enabled",
  },
];
