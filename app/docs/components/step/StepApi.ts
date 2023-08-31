export const stepApiData = [
  {
    id: 3,
    propsName: "withBg",
    propsType: "boolean",
    propsDescription: "Adds a background style to the step component.",
    default: "false",
  },
  {
    id: 4,
    propsName: "withRing",
    propsType: "boolean",
    propsDescription: "Applies a ring around the step component.",
    default: "false",
  },
  {
    id: 5,
    propsName: "withBorder",
    propsType: "boolean",
    propsDescription: "Displays a border around the step component.",
    default: "false",
  },
  {
    id: 6,
    propsName: "borderType",
    propsType: ["solid", "dashed"],
    propsDescription: "Sets the type of border for the step component.",
    default: "solid",
  },
  {
    id: 7,
    propsName: "color",
    propsType: ["info", "error", "success", "warning", "gray"],
    propsDescription: "Specifies the color of the step indicator point.",
    default: "info",
  },
  {
    id: 8,
    propsName: "stepPointSize",
    propsType: ["sm", "md", "lg", "xl"],
    propsDescription: "Determines the size of the step indicator point.",
    default: "md",
  },
  {
    id: 9,
    propsName: "ringType",
    propsType: ["ring-2", "ring-4"],
    propsDescription:
      "Selects the type of ring style around the step component.",
    default: "ring-2",
  },
  {
    id: 10,
    propsName: "ringTypeColor",
    propsType: ["light", "deep"],
    default: "light",
    propsDescription: "Specifies the color variant of the ring style.",
  },
];
