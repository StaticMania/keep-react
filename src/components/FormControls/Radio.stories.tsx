import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      description: "Radio avaiable size",
    },
    checked: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      description: "Radio checked or not?",
    },
    checkedIcon: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      description: "Radio checked Icon show or not?",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const DefaultRadio: Story = {
  args: {
    checkedIcon: false,
    checked: true,
  },
};
