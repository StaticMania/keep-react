import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    step: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
    },
    min: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
    },
    max: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 1000 },
      },
    },
    range: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    defaultValue: {
      table: {
        type: { summary: '"number" | "Object"' },
        defaultValue: { summary: 300 },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5 ">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const DefaultSlider: Story = {
  args: {
    step: 100,
    min: 100,
    max: 1000,
    range: false,
    defaultValue: 300,
  },
};
export const SliderWithDots: Story = {
  args: {
    ...DefaultSlider.args,
    dots: true,
    step: 200,
  },
};
export const SliderWithMarks: Story = {
  args: {
    ...DefaultSlider.args,
    marks: { 200: "200", 500: "500", 800: "800", 1000: 1000 },
  },
};
export const SliderWithTooltipTop: Story = {
  args: {
    ...DefaultSlider.args,
    tooltip: "top",
  },
};
export const SliderWithTooltipBottom: Story = {
  args: {
    ...SliderWithTooltipTop.args,
    tooltip: "bottom",
  },
};
