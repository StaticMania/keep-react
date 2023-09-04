import { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "The Progress component is a visual indicator that shows the progress of a task. It displays a horizontal bar that fills up based on the completion percentage.",
  },

  argTypes: {
    label: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    labelPosition: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" },
      },
    },

    color: {
      control: "select",
      options: ["info", "error", "success", "warning", "indigo", "purple"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "info" },
      },
      description: "It defines the avaiable color for progress",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    progress: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 45 },
      },
    },
  },

  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const DefaultProgress: Story = {
  args: {
    progress: 45,
    color: "info",
  },
};

export const ProgressWithLevel: Story = {
  args: {
    ...DefaultProgress.args,
    label: "Progress Text",
    labelPosition: "outside",
  },
};
export const ProgressWithProgressLevel: Story = {
  args: {
    ...DefaultProgress.args,
    labelProgress: true,
  },
};
export const ProgressWithProgressPopup: Story = {
  args: {
    ...DefaultProgress.args,
    showPopupLabelProgress: true,
  },
};

export const ProgressWithBorder: Story = {
  args: {
    ...ProgressWithProgressPopup.args,
    bordered: true,
  },
};
