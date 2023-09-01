export const tabsApiData = [
  {
    id: 1,
    propsName: "style",
    propsType: ["default", "underline", "pills", "fullWidth"],
    propsDescription: "Specifies the style variant of the tabs.",
    default: "default",
  },
  {
    id: 2,
    propsName: "iconPosition",
    propsType: ["left", "right"],
    propsDescription:
      "Determines whether icons appear on the left or right side of tab labels.",
    default: "left",
  },
  {
    id: 3,
    propsName: "borderPosition",
    propsType: ["top", "bottom"],
    default: "bottom",
    propsDescription:
      "Sets the position of a border line within the Tabs component.",
  },
  {
    id: 4,
    propsName: "onActiveTabChange",
    propsType: "function",
    default: "()=>void",
    propsDescription: "Callback for handling active tab changes.",
  },
];
