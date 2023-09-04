import type { Meta, StoryObj } from "@storybook/react";
import { DownloadSimple } from "phosphor-react";
import { Step } from ".";
import { removeFragment } from "@/src/helpers/mergeDeep";

const meta: Meta<typeof Step> = {
  component: Step,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    children: {
      control: { disable: true },
      description: "Children is step content",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description: "Your custom className",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    horizontal: {
      description: "Step show horizontal or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    withBg: {
      description: "Step Backgorund color show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    withRing: {
      description: "Step ring show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    withBorder: {
      description: "Step border show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    borderType: {
      description: "Avaiable border type for Step",
      control: "select",
      options: ["solid", "dashed"],
      table: {
        type: { summary: "solid |  dashed" },
        defaultValue: { summary: "solid" },
      },
    },
    color: {
      description: "Avaiable color for Step",
      control: "select",
      options: ["info", "error", "success", "warning", "gray"],
      table: {
        type: { summary: "info | error | success | warning | gray" },
        defaultValue: { summary: "info" },
      },
    },
    stepPointSize: {
      description: "Avaiable step point size",
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      table: {
        type: { summary: "sm | md | lg | xl" },
        defaultValue: { summary: "info" },
      },
    },
    ringType: {
      description: "Avaiable ring type",
      control: "select",
      options: ["solid", "dashed"],
      table: {
        type: { summary: "solid | dashed " },
        defaultValue: { summary: "solid" },
      },
    },
    ringTypeColor: {
      description: "Avaiable ring type color",
      control: "select",
      options: ["deep", "light"],
      table: {
        type: { summary: "deep | light " },
        defaultValue: { summary: "deep" },
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
  decorators: [
    (Story) => (
      <div className="my-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Step>;

const defaultStep = (
  <>
    <Step.Item completed={true}>
      <Step.Point completed={true}>1</Step.Point>
      <Step.Title>Step Title 1</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item completed={true}>
      <Step.Point completed={true}>2</Step.Point>
      <Step.Title>Step Title 2</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item active={true}>
      <Step.Point completed={true} icon={<DownloadSimple size={20} />} />
      <Step.Title>Step Title 3</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item>
      <Step.Point>4</Step.Point>
      <Step.Title>Step Title 4</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
  </>
);

export const DefaultStep: Story = {
  args: {
    children: removeFragment(defaultStep),
    withBg: true,
  },
};
const incompleteStep = (
  <>
    <Step.Item>
      <Step.Point>1</Step.Point>
      <Step.Title>Step Title 1</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item>
      <Step.Point>2</Step.Point>
      <Step.Title>Step Title 2</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item>
      <Step.Point>3</Step.Point>
      <Step.Title>Step Title 3</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
    <Step.Item>
      <Step.Point>4</Step.Point>
      <Step.Title>Step Title 4</Step.Title>
      <Step.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Step.Content>
    </Step.Item>
  </>
);

export const IncompleteStep: Story = {
  args: {
    children: removeFragment(incompleteStep),
  },
};

export const StepWithoutBackground: Story = {
  args: {
    ...IncompleteStep.args,
    withBorder: true,
    withBg: false,
  },
};
export const DashedBorderStep: Story = {
  args: {
    ...StepWithoutBackground.args,
    withBorder: true,
    borderType: "dashed",
    withBg: true,
  },
};
