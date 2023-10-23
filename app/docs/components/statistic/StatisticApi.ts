export const statisticApiData = [
  {
    id: 1,
    propsName: "showDollar",
    propsType: "boolean",
    propsDescription:
      "Displays a dollar sign or currency symbol, if applicable.",
    default: "false",
  },
  {
    id: 2,
    propsName: "showFilter",
    propsType: "boolean",
    propsDescription: "Indicates whether a filter option should be shown.",
    default: "false",
  },
  {
    id: 3,
    propsName: "iconBg",
    propsType: ["primary", "success"],
    propsDescription: "Sets the background color variant for the icon.",
    default: "primary",
  },
  {
    id: 4,
    propsName: "children",
    propsType: "ReactNode",
    propsDescription:
      "Child components and content to be placed within the statistic component.",
    default: "Content",
  },
  {
    id: 5,
    propsName: "filterLabel",
    propsType: "string",
    propsDescription: "Filter label text",
    default: "This Month",
  },
  {
    id: 6,
    propsName: "filterData",
    propsType: "string[]",
    propsDescription: "Filter Data for dropdown",
    default: "['January','...']",
  },
];
