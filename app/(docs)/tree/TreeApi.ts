export const treeApiData = [
  {
    id: 1,
    propsName: "nodes",
    propsType: "Array Of Object",
    propsDescription:
      "An array of Node objects to be displayed in the tree. It must have id,title and children properties",
  },
  {
    id: 2,
    propsName: "showIcon",
    propsType: "boolean",
    propsDescription: "Determines whether icons are displayed for nodes.",
  },
  {
    id: 3,
    propsName: "showItemsNumber",
    propsType: "boolean",
    propsDescription:
      "Specifies whether the number of child items is displayed for parent nodes.",
  },
  {
    id: 4,
    propsName: "showBorder",
    propsType: "boolean",
    propsDescription: "Specifies whether borders are displayed around nodes.",
  },
  {
    id: 5,
    propsName: "ParentIcon",
    propsType: "ReactNode",
    propsDescription: "An icon to be displayed for parent nodes.",
  },
  {
    id: 6,
    propsName: "ChildIcon",
    propsType: "ReactNode",
    propsDescription: "An icon to be displayed for child nodes.",
  },
  {
    id: 7,
    propsName: "showCheckbox",
    propsType: "boolean",
    propsDescription: "Determines whether checkboxes are displayed for nodes.",
  },
];
