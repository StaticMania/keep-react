export const tableApiData = [
  {
    id: 1,
    propsName: "hoverable",
    propsType: "boolean",
    propsDescription: "Enables hover effect on table rows.",
    default: "false",
  },

  {
    id: 2,
    propsName: "showCheckbox",
    propsType: "boolean",
    default: "false",
    propsDescription:
      "Indicates if checkboxes should be displayed in the table.",
  },
  {
    id: 3,
    propsName: "showBorder",
    propsType: "boolean",
    default: "false",
    propsDescription: "Controls the visibility of the table's borders.",
  },
  {
    id: 4,
    propsName: "showBorderPosition",
    propsType: ["left", "right"],
    default: "right",
    propsDescription: "Determines the position of the table's borders",
  },
  {
    id: 5,
    propsName: "children",
    propsType: "ReactNode",
    default: "content",
    propsDescription:
      "Child components and content to be placed within the table.",
  },
  {
    id: 6,
    propsName: "striped",
    propsType: "boolean",
    default: "false",
    propsDescription:
      "Applies alternating background colors to table rows for better readability.",
  },
];
