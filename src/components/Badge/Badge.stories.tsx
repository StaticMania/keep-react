import type { Meta, StoryObj } from "@storybook/react";

import { Crown } from "phosphor-react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div
        style={{
          margin: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "sm" },
      },
    },
    iconPosition: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },
    color: {
      control: "select",
      options: ["error", "gray", "info", "success", "warning"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "info" },
      },
    },
    colorType: {
      control: "select",
      options: ["light", "strong"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
      },
    },
    badgeType: {
      control: "select",
      options: ["default", "outline", "text"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    href: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    componentSubtitle:
      "A badge component is a small UI element that displays a short text or a numerical value, typically used to indicate the status, quantity, or category of a related item. Badges are usually displayed as small colored circles or rectangles, with the text or number centered inside.",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const DefaultBadge: Story = {
  args: {
    size: "xs",
    colorType: "light",
    color: "info",
    children: "Default Badge",
    icon: null,
  },
};

export const BadgeWithLeftIcon: Story = {
  args: {
    size: "xs",
    colorType: "light",
    color: "info",
    children: "Icon Badge",
    icon: <Crown size={18} weight="light" />,
    iconPosition: "left",
  },
};

export const BadgeWithRightIcon: Story = {
  args: {
    ...BadgeWithLeftIcon.args,
    size: "sm",
    iconPosition: "right",
  },
};
