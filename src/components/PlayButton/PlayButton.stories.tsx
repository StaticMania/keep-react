import type { Meta, StoryObj } from "@storybook/react";
import { Play } from "phosphor-react";
import PlayButton from ".";

const meta: Meta<typeof PlayButton> = {
  component: PlayButton,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Button text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Play Video" },
      },
    },
    size: {
      description: "Avaiale button size",
      table: {
        defaultValue: { summary: "md" },
      },
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    type: {
      description: "Avaiale button type",
      table: {
        defaultValue: { summary: "primary" },
      },
      control: "radio",
      options: ["primary", "text", "outlineGray", "gradient"],
    },
    icon: {
      description: "Play icon",
      control: { type: null },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlayButton>;

export const DefaultPlayButton: Story = {
  args: {
    title: "Play Video",
    type: "primary",
    size: "md",
    icon: <Play size="24" />,
  },
};
export const SecondaryPlayButton: Story = {
  args: {
    ...DefaultPlayButton.args,
    type: "outlineGray",
  },
};
export const NoBorderPlayButton: Story = {
  args: {
    ...DefaultPlayButton.args,
    type: "text",
  },
};
export const CirclePlayButton: Story = {
  args: {
    size: "xl",
    type: "primary",
    circle: true,
    icon: <Play size="24" />,
  },
};
export const CirclePlayButtonWithGradient: Story = {
  args: {
    ...CirclePlayButton.args,
    type: "blur",
    className: "bg-gradient-to-r from-primary-500",
  },
};
