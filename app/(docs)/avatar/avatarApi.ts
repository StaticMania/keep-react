import { ComponentApiProps } from "@/types/types";

export const avatarApiData: ComponentApiProps[] = [
  {
    id: 1,
    propsName: "alt",
    propsType: "string",
    propsDescription: "Alternative text for the avatar image.",
  },
  {
    id: 2,
    propsName: "bordered",
    propsType: "boolean",
    propsDescription: "Determines if the avatar has a border.",
  },
  {
    id: 3,
    propsName: "img",
    propsType: "string",
    propsDescription: "Path to the user's image to be displayed in the avatar.",
  },
  {
    id: 4,
    propsName: "size",
    propsType: "keyof AvatarSizes",
    propsDescription:
      "Specifies the size of the avatar. Possible values are: 'xs', 'sm', 'md', 'lg', 'xl', or '2xl'.",
  },
  {
    id: 5,
    propsName: "shape",
    propsType: "keyof KeepShapes",
    propsDescription:
      "Determines the shape of the avatar. Possible values are: 'round', 'roundSquare', or 'square'.",
  },
  {
    id: 6,
    propsName: "stacked",
    propsType: "boolean",
    propsDescription: "Specifies if avatars should be stacked together.",
  },
  {
    id: 7,
    propsName: "rounded",
    propsType: "boolean",
    propsDescription: "Determines if the avatar has rounded corners.",
  },
  {
    id: 8,
    propsName: "status",
    propsType: "'away' | 'busy' | 'offline' | 'online'",
    propsDescription: "Reflects the user's availability status.",
  },
  {
    id: 9,
    propsName: "statusType",
    propsType: "keyof KeepAvatarStatusType",
    propsDescription:
      "Specifies the type of status. Possible values are: 'away', 'busy', 'offline', or 'online'.",
  },
  {
    id: 10,
    propsName: "statusPosition",
    propsType: "keyof KeepPositions",
    propsDescription: "Specifies the position of the status indicator.",
  },
  {
    id: 11,
    propsName: "totalNotification",
    propsType: "number",
    propsDescription: "The total number of notifications to be displayed.",
  },
  {
    id: 12,
    propsName: "customStatusIcon",
    propsType: "string",
    propsDescription:
      "Path to a custom status icon to be displayed in the avatar.",
  },
];
