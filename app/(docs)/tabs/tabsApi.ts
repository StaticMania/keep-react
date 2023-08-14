export const tabsApiData = [
  {
    id: 1,
    propsName: "style",
    propsType: "string",
    propsDescription: "Specifies the style variant of the tabs.",
  },
  {
    id: 2,
    propsName: "iconPosition",
    propsType: '"left" | "right"',
    propsDescription:
      "Determines whether icons appear on the left or right side of tab labels.",
  },
  {
    id: 3,
    propsName: "borderPosition",
    propsType: '"top" | "bottom"',
    propsDescription:
      "Sets the position of a border line within the Tabs component.",
  },
  {
    id: 4,
    propsName: "onActiveTabChange",
    propsType: "(activeTab: number) => void",
    propsDescription: "Callback for handling active tab changes.",
  },
];
