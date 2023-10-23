export const breadcrumbApiData = [
  {
    id: 1,
    propsName: "separatorIcon",
    propsType: "ReactNode",
    propsDescription:
      "Icon to be used as a separator between breadcrumb items.",
    default: "<ArrowsLeftRight/>",
  },
  {
    id: 2,
    propsName: "breadCrumbWithBorder",
    propsType: "boolean",
    propsDescription: "Add a border around the breadcrumb container.",
    default: "false",
  },
];

export const breadcrumbItemApiData = [
  {
    id: 1,
    propsName: "href",
    propsType: "string",
    propsDescription: "The URL to navigate to when the breadcrumb is clicked.",
    default: "#",
  },
  {
    id: 2,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "An icon element to display within the breadcrumb.",
    default: "None",
  },
  {
    id: 3,
    propsName: "active",
    propsType: ["border", "bar", "base"],
    propsDescription: "Defines the active state style for the breadcrumb.",
    default: "base",
  },
  {
    id: 4,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disables the breadcrumb, making it unclickable.",
    default: "false",
  },
];
