import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from ".";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
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
    children: {
      control: { disable: true },
      defaultValue: "",
      description: "Children is a button element where user can click or hover",
    },
    trigger: {
      description: "Trigger mode for displaying the tooltip",
      control: "radio",
      options: ["hover", "click"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "hover" },
      },
    },
    placement: {
      description: "Placement of the tooltip",
      control: "select",
      options: ["top", "bottom", "left", "right"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "top" },
      },
    },
    animation: {
      description: "Animation duration class for the tooltip",
      control: "select",
      options: [
        "duration-0",
        "duration-75",
        "duration-100",
        "duration-150",
        "duration-200",
        "duration-300",
        "duration-500",
        "duration-700",
        "duration-1000",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "duration-300" },
      },
    },
    style: {
      description: "Style of the tooltip",
      control: "select",
      options: ["dark", "light"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dark" },
      },
    },
    arrow: {
      description: "Show or hide the tooltip arrow sign",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    content: {
      description: "Content of the tooltip",
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
    title: {
      description: "Title of the tooltip",
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
  },
  parameters: {
    componentSubtitle:
      "A tooltip component is a UI element that displays a small piece of information when the user hovers over or clicks on another element. Tooltips are typically used to provide additional context or explanation for an element, such as a button or an icon, without cluttering the main interface.",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DefaultTooltip: Story = {
  args: {
    content: "Tooltips text here",
    trigger: "hover",
    placement: "right",
    animation: "duration-300",
    style: "dark",
    children: (
      <Button size="sm" type="primary">
        Tooltip
      </Button>
    ),
  },
};
export const TooltipWithTitle: Story = {
  args: {
    ...DefaultTooltip.args,
    title: "Tooltip title here",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, recusandae!",
  },
};
export const TooltipWithLightMode: Story = {
  args: {
    ...TooltipWithTitle.args,
    style: "light",
  },
};
