export const NavbarApiData = [
  {
    id: 2,
    propsName: "fluid",
    propsType: "boolean",
    propsDescription:
      "Determines whether the navbar should be fluid or fixed-width.",
    default: "false",
  },
  {
    id: 3,
    propsName: "rounded",
    propsType: "boolean",
    propsDescription:
      "Specifies whether the navbar should have rounded corners.",
    default: "false",
  },
  {
    id: 4,
    propsName: "border",
    propsType: "boolean",
    propsDescription:
      "Controls whether a border should be added to the navbar.",
    default: "false",
  },
  {
    id: 5,
    propsName: "collapseType",
    propsType: ["sidebar", "fullWidth"],
    propsDescription: "Responsive menu collapse effect",
    default: "false",
  },
];

export const NavLinksAPIData = [
  {
    id: 6,
    propsName: "icon",
    propsType: "string",
    propsDescription: "Menu Link Icon",
    default: "CaretRight",
  },
  {
    id: 7,
    propsName: "linkName",
    propsType: "string",
    propsDescription: "Menu Link name",
    default: "home",
  },
  {
    id: 8,
    propsName: "iconAnimation",
    propsType: "boolean",
    propsDescription: "Menu Link Icon Animated or not",
    default: "true",
  },
  {
    id: 9,
    propsName: "href",
    propsType: "string",
    propsDescription: "Menu Link href",
    default: "/",
  },
];
