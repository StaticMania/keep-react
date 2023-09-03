import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "xl" },
      },
    },
    totalNotification: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "99" },
      },
    },
    alt: { control: { type: "string", defaultValue: "avatar" } },

    statusPosition: {
      control: "select",
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "top-right" },
      },
    },

    children: {
      description: "It define text about the avatar",
      defaultValue: "avatar",
      type: "string",
    },
  },
  parameters: {
    componentSubtitle:
      "The Avatar component in the Keep Design System allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.",
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
    rounded: false,
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
    shape: "round",
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
