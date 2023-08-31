export const notificationApi = [
  {
    id: 1,
    propsName: "additionalContent",
    propsType: "ReactNode",
    propsDescription:
      "Additional content to be displayed within the notification.",
    default: "ReactNode",
  },
  {
    id: 2,
    propsName: "infoIcon",
    propsType: "ReactNode",
    propsDescription:
      "Icon to be displayed in the notification as an informational indicator.",
    default: "ReactNode",
  },
  {
    id: 3,
    propsName: "dismiss",
    propsType: "boolean",
    propsDescription:
      "Determines whether the notification can be dismissed by the user.",
    default: "false",
  },
  {
    id: 4,
    propsName: "headerBannerSrc",
    propsType: "string",
    propsDescription:
      "Source URL for an image to be used as the header banner of the notification.",
    default: "URL",
  },
  {
    id: 5,
    propsName: "onDismiss",
    propsType: "function",
    propsDescription:
      "Callback function triggered when the notification is dismissed.",
    default: "boolean | (() => void)",
  },
];
