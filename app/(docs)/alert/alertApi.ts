import { ComponentApiProps } from "@/types/types";

export const alertApiData: ComponentApiProps[] = [
  {
    id: 1,
    propsName: "color",
    propsDescription: "The color variant of the alert.",
    propsType: '"info" | "gray" | "success" | "warning" | "error"',
  },
  {
    id: 2,
    propsName: "icon",
    propsDescription: "Custom icon to be displayed in the alert.",
    propsType: "ReactNode",
  },
  {
    id: 3,
    propsName: "dismiss",
    propsDescription: "Enables or disables the dismiss icon.",
    propsType: "boolean",
  },
  {
    id: 4,
    propsName: "onDismiss",
    propsDescription:
      "Handler function to be called when the dismiss icon is clicked.",
    propsType: "function",
  },
  {
    id: 5,
    propsName: "rounded",
    propsDescription: "Adds rounded corners to the alert.",
    propsType: "boolean",
  },
  {
    id: 6,
    propsName: "withBorder",
    propsDescription: "Adds a border around the alert.",
    propsType: "boolean",
  },
  {
    id: 7,
    propsName: "withBorderAccent",
    propsDescription: "Adds a border accent to the alert.",
    propsType: "boolean",
  },
  {
    id: 8,
    propsName: "withBorderAccentPosition",
    propsDescription: "Specifies the position of the border accent.",
    propsType: '"left" | "right" | "top" | "bottom"',
  },
  {
    id: 9,
    propsName: "children",
    propsDescription: "The main content of the alert.",
    propsType: "ReactNode",
  },
];
