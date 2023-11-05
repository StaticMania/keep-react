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
    radioShape: {
      control: "select",
      options: ["circle", "square"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "circle" },
      },
      description: "Avaiable radio shape",
    },
    value: {
      table: {
        type: { summary: "boolen" },
        defaultValue: { summary: true },
      },
      description: "Value associated with the radio input.",
    },
    selected: {
      table: {
        type: { summary: "boolen" },
        defaultValue: { summary: true },
      },
      description: "Currently selected value in a group of radio inputs.",
    },
    checked: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      description: "Radio checked or not?",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const DefaultRadio: Story = {
  args: {
    checked: true,
  },
};
