import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    sizing: {
      table: {
        control: "select",
        options: ["sm", "md", "lg"],
        table: {
          type: { summary: "sm | md | lg" },
          defaultValue: { summary: "md" },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

const NumberInputWithHooks = () => {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} setValue={setValue} />;
};

export const DefaultNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: "md",
  },
};
export const SmallNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: "sm",
  },
};
export const MediumNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: "md",
  },
};
export const LargeNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: "lg",
  },
};
