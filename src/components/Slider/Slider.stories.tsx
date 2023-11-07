import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    step: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    min: {
      description: 'Minimum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    max: {
      description: 'Maximum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1000 },
      },
    },
    range: {
      description: 'Determines whether the slider displays a range color',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    dots: {
      description: 'Determines whether dots are displayed on the slider',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    reverse: {
      description: 'Determines if the slider values are shown in reverse',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Determines if the slider is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

    defaultValue: {
      description: 'Initial default value or values for the slider.',
      table: {
        type: { summary: '"number" | "Object"' },
        defaultValue: { summary: 300 },
      },
    },
    marks: {
      description: 'Defines points on the slider with custom labels.',
    },
    onChange: {
      description: 'Callback function when the slider value changes',
    },
    tooltip: {
      description: 'Specifies the position of the tooltip or hides it',
      options: ['top', 'bottom', 'none'],
      control: 'select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
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
}

export default meta
type Story = StoryObj<typeof Slider>

export const DefaultSlider: Story = {
  args: {
    step: 100,
    min: 100,
    max: 1000,
    range: false,
    defaultValue: 300,
  },
}
export const SliderWithDots: Story = {
  args: {
    ...DefaultSlider.args,
    dots: true,
    step: 200,
  },
}
export const SliderWithMarks: Story = {
  args: {
    ...DefaultSlider.args,
    marks: { 200: '200', 500: '500', 800: '800', 1000: 1000 },
  },
}
export const SliderWithTooltipTop: Story = {
  args: {
    ...DefaultSlider.args,
    tooltip: 'top',
  },
}
export const SliderWithTooltipBottom: Story = {
  args: {
    ...SliderWithTooltipTop.args,
    tooltip: 'bottom',
  },
}
