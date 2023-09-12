export const alertApiData = [
  {
    id: 1,
    propsName: "color",
    propsDescription: "The color variant of the alert.",
    propsType: ["info", "gray", "success", "warning", "error"],
    default: "info",
  },
  {
    id: 2,
    propsName: "icon",
    propsDescription: "Custom icon to be displayed in the alert.",
    propsType: "ReactNode",
    default: "<Info/>",
  },
  {
    id: 3,
    propsName: "dismiss",
    propsDescription: "Enables or disables the dismiss icon.",
    propsType: "boolean",
    default: "false",
  },
  {
    id: 4,
    propsName: "onDismiss",
    propsDescription:
      "Handler function to be called when the dismiss icon is clicked.",
    propsType: "function",
    default: "() => void",
  },
  {
    id: 5,
    propsName: "rounded",
    propsDescription: "Adds rounded corners to the alert.",
    propsType: "boolean",
    default: "false",
  },
  {
    id: 6,
    propsName: "withBorder",
    propsDescription: "Adds a border around the alert.",
    propsType: "boolean",
    default: "false",
  },
  {
    id: 7,
    propsName: "withBorderAccent",
    propsDescription: "Adds a border accent to the alert.",
    propsType: "boolean",
    default: "false",
  },
  {
    id: 8,
    propsName: "withBorderAccentPosition",
    propsDescription: "Specifies the position of the border accent.",
    propsType: ["left", "right", "top", "bottom"],
    default: "left",
  },
];
