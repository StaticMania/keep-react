import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '.'

/**
 * Metadata for the Slider component.
 */
const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    /**
     * The step value of the slider.
     */
    step: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    /**
     * The minimum value of the slider. Default value is 100.
     */
    min: {
      description: 'Minimum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    /**
     * The maximum value of the slider. Default value is 1000.
     */
    max: {
      description: 'Maximum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1000 },
      },
    },
    /**
     * Determines whether the slider displays a range color. Default value is false.
     */
    range: {
      description: 'Determines whether the slider displays a range color',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Determines whether dots are displayed on the slider. Default value is false.
     */
    dots: {
      description: 'Determines whether dots are displayed on the slider',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Determines if the slider values are shown in reverse. Default value is false.
     */
    reverse: {
      description: 'Determines if the slider values are shown in reverse',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Determines if the slider is disabled. Default value is false.
     */
    disabled: {
      description: 'Determines if the slider is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Initial default value or values for the slider. Default value is 300.
     */
    defaultValue: {
      description: 'Initial default value or values for the slider.',
      table: {
        type: { summary: '"number" | "Object"' },
        defaultValue: { summary: 300 },
      },
    },
    /**
     * Defines points on the slider with custom labels.
     */
    marks: {
      description: 'Defines points on the slider with custom labels.',
    },
    /**
     * Callback function when the slider value changes.
     */
    onChange: {
      description: 'Callback function when the slider value changes',
    },
    /**
     * Specifies the position of the tooltip or hides it. Default value is 'top'.
     */
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
  /**
   * The decorators for the Slider component.
   * @param {Story} Story - The story object.
   * @returns {JSX.Element} - The wrapped story object.
   */
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

/**
 * DefaultSlider story configuration.
 */
export const DefaultSlider: Story = {
  args: {
    step: 100,
    min: 100,
    max: 1000,
    range: false,
    defaultValue: 300,
  },
}
/**
 * SliderWithDots story configuration.
 * @type {Story}
 */
export const SliderWithDots: Story = {
  args: {
    ...DefaultSlider.args,
    dots: true,
    step: 200,
  },
}
/**
 * Story configuration for SliderWithMarks.
 * This story configures the Slider component with marks at specific values.
 * The marks object contains key-value pairs where the key represents the value on the slider and the value represents the label for that value.
 * The marks in this configuration are set to { 200: '200', 500: '500', 800: '800', 1000: 1000 }.
 */
export const SliderWithMarks: Story = {
  args: {
    ...DefaultSlider.args,
    marks: { 200: '200', 500: '500', 800: '800', 1000: 1000 },
  },
}
/**
 * SliderWithTooltipTop story configuration.
 * @type {Story}
 */
export const SliderWithTooltipTop: Story = {
  args: {
    ...DefaultSlider.args,
    tooltip: 'top',
  },
}
/**
 * SliderWithTooltipBottom story configuration.
 * @type {Story}
 */
export const SliderWithTooltipBottom: Story = {
  args: {
    ...SliderWithTooltipTop.args,
    tooltip: 'bottom',
  },
}
