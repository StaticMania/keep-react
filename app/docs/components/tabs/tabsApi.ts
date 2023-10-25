export const tabsApiData = [
  {
    id: 1,
    propsName: "style",
    propsType: ["default", "underline", "pills"],
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

export const tabsItemApiData = [
  {
    id: 1,
    propsName: "title",
    propsType: "ReactNode",
    propsDescription: "The title of the tab item.",
    default: "Profile",
  },
  {
    id: 2,
    propsName: "active",
    propsType: "boolean",
    propsDescription: "Determines whether the tab item is active.",
    default: "false",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Determines whether the tab item is disabled.",
    default: "false",
  },
  {
    id: 4,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "The icon to display with the tab item.",
    default: "None",
  },
  {
    id: 5,
    propsName: "notification",
    propsType: ["number", "string"],
    propsDescription: "Notification content for the tab item.",
    default: "number",
  },
  {
    id: 6,
    propsName: "notificationColor",
    propsType: ["error", "gray", "info", "success", "warning"],
    propsDescription: "The color of the notification for the tab item.",
    default: "info",
  },
];
