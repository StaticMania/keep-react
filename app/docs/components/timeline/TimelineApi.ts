export const timelineApiData = [
  {
    id: 1,
    propsName: "horizontal",
    propsType: "boolean",
    propsDescription:
      "Arranges the timeline component horizontally if set to true.",
    default: "false",
  },
  {
    id: 2,
    propsName: "gradientPoint",
    propsType: "boolean",
    propsDescription: "Adds a gradient effect to the timeline event markers.",
    default: "false",
  },
  {
    id: 2,
    propsName: "gradientColor",
    propsType: "string",
    propsDescription: `Adds a gradient color with class "bg-gradient-{1-31}".`,
    default: "bg-gradient-9",
  },
  {
    id: 3,
    propsName: "timelineBarType",
    propsType: ["solid", "dashed"],
    propsDescription: "Sets the type of bar style in the timeline.",
    default: "solid",
  },
];
