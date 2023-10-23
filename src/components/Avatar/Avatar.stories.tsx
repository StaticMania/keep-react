import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Specifies the size of the avatar",

      table: {
        type: { summary: "string" },
        defaultValue: { summary: "xl" },
      },
    },
    totalNotification: {
      table: {
        type: { summary: "The total number of notifications to be displayed." },
        defaultValue: { summary: "99" },
      },
    },
    alt: {
      description: "Alternative text for the avatar image.",
    },
    statusPosition: {
      control: "select",
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
      table: {
        type: { summary: "Specifies the position of the status indicator." },
        defaultValue: { summary: "top-right" },
      },
    },
    statusType: {
      description:
        "Specifies the type of status. Possible values are: 'dot', 'notification'",
      defaultValue: "dot",
      type: "string",
    },
    children: {
      description: "It define text about the avatar",
      defaultValue: "avatar",
      type: "string",
    },
    shape: {
      description: "Determines the shape of the avatar.",
    },
    status: {
      description: "Reflects the user's availability status.",
    },
    stacked: {
      description: "Specifies if avatars should be stacked together.",
    },
    img: {
      description: "Path to the user's image to be displayed in the avatar.",
    },
    bordered: {
      description: "Determines if the avatar has a border.",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const DefaultAvatar: Story = {
  args: {
    size: "xl",
    shape: "square",
    status: "online",
    statusType: "dot",
    statusPosition: "top-left",
    img: "",
    totalNotification: 99,
    stacked: false,
    alt: "avatar",
    bordered: false,
    children: "",
  },
};

export const RoundedAvatar: Story = {
  args: {
    shape: "circle",
    size: "xl",
  },
};

export const AvatarWithDot: Story = {
  args: {
    ...RoundedAvatar.args,
    statusType: "dot",
    statusPosition: "top-left",
    status: "away",
  },
};

export const AvatarWithImg: Story = {
  args: {
    ...RoundedAvatar.args,
    alt: "user",
    img: "https://randomuser.me/api/portraits/women/11.jpg",
  },
};

export const AvatarWithNotification: Story = {
  args: {
    ...RoundedAvatar.args,
    alt: "user",
    img: "https://randomuser.me/api/portraits/women/11.jpg",
    statusType: "notification",
    totalNotification: 99,
    statusPosition: "top-right",
    status: "away",
  },
};
