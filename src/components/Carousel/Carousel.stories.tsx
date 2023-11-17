import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Carousel } from '.'
import Image from 'next/image'

/**
 * Meta information for the Carousel component.
 */
const meta: Meta<typeof Carousel> = {
  /**
   * The Carousel component.
   */
  component: Carousel,

  /**
   * Tags associated with the Carousel component.
   */
  tags: ['autodocs'],

  /**
   * Decorators for the Carousel component.
   */
  decorators: [
    /**
     * Decorator function that wraps the Story component.
     */
    (Story) => (
      <div className="h-56 w-full  sm:h-64 xl:h-80 2xl:h-96">
        <Story />
      </div>
    ),
  ],

  /**
   * Argument types for the Carousel component.
   */
  argTypes: {
    /**
     * The children of the Carousel component.
     */
    children: {
      control: { disable: true },
      description: 'Children is carousel Image item',
      table: {
        type: { summary: 'ReactNode' },
      },
    },

    /**
     * Whether to show the Carousel indicators or not.
     */
    indicators: {
      description: 'Carousel indicators show or not?',
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: true },
      },
    },

    /**
     * Whether to show the Carousel control buttons or not.
     */
    showControls: {
      description: 'Carousel Control button show or not?',
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: true },
      },
    },

    /**
     * The left control icon of the Carousel component.
     */
    leftControl: {
      control: { disable: true },
      description: 'Carousel Left Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },

    /**
     * The right control icon of the Carousel component.
     */
    rightControl: {
      control: { disable: true },
      description: 'Carousel Right Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },

    /**
     * Whether the Carousel should auto slide or not.
     */
    slide: {
      description: 'Carousel auto slide?',
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: true },
      },
    },

    /**
     * The interval time for Carousel auto slide.
     */
    slideInterval: {
      description: 'Carousel Interval Time',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
    },

    /**
     * The type of Carousel indicators.
     */
    indicatorsType: {
      description: 'Carousel indocator Type',
      control: 'select',
      options: ['dot', 'ring', 'bar', 'square', 'squareRing'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dot' },
      },
    },

    /**
     * The color type of Carousel indicators.
     */
    indicatorsTypeColors: {
      description: 'Carousel indocator color Type',
      control: 'select',
      options: ['white', 'slate'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const imgUrl = [
  'd1bfb4f8-ee1d-44c6-be78-9662656e0210_slider-1.jpg?auto=compress,format',
  '97813c41-9011-437b-a418-7b1afd1f939f_slider-4.jpg?auto=compress,format',
  '107cb557-9589-4ffc-bbd7-543c6f4c2533_slider-3.jpg?auto=compress,format',
  'b651e511-0c29-4b4c-85b6-a10919282f88_slider-2.jpg?auto=compress,format',
]

function renderImageMultipleTimes(): React.ReactElement[] {
  const images = []
  for (let i = 0; i < 4; i++) {
    /**
     * Represents an item in the carousel.
     */
    const item = (
      <Image
        src={`https://images.prismic.io/staticmania/${imgUrl[i]}`}
        alt={`slider-${i + 1}`}
        height={400}
        width={910}
      />
    )
    images.push(item)
  }
  return images
}

function renderSlideMultipleTimes(): React.ReactElement[] {
  const slides = []
  for (let i = 0; i < 5; i++) {
    const item = <div className="flex h-full items-center justify-center bg-metal-400">Slide {i + 1}</div>
    slides.push(item)
  }
  return slides
}

/**
 * Represents a story for a carousel with default props.
 * The interval (in milliseconds) between each slide transition.
 * Whether to show the Carousel indicators or not.
 * Whether to show the Carousel control buttons or not.
 * The type of indicators for the carousel (dot).
 * The color scheme for the indicators.
 */
export const DefaultCarousel: Story = {
  args: {
    slideInterval: 5000,
    showControls: true,
    indicators: true,
    indicatorsType: 'dot',
    slide: true,
    indicatorsTypeColors: 'white',
    children: renderImageMultipleTimes(),
  },
}
/**
 * Represents a story for a carousel with static slides.
 * Whether the carousel should slide or not.
 */
export const StaticCarousel: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: false,
  },
}
/**
 * Represents a story for a carousel with ring indicators.
 * The type of indicators for the carousel (ring).
 */
export const CarouselWithRingIndicator: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: true,
    indicatorsType: 'ring',
  },
}

/**
 * Represents a story for a carousel with bar indicators.
 * The type of indicators for the carousel (bar).
 */
export const CarouselWithBarIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'bar',
  },
}

/**
 * Represents a story for a carousel with square indicators.
 * The type of indicators for the carousel (square).
 */
export const CarouselWithSquareIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'square',
  },
}

/**
 * Represents a story for CarouselWithSquareRingIndicator.
 * The type of indicators for the carousel (squareRing).
 */

export const CarouselWithSquareRingIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'squareRing',
  },
}

/**
 * Represents a story for a Carousel component without indicators.
 * Whether to show indicators or not.
 */
export const CarouselWithoutIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicators: false,
  },
}
/**
 * Represents a story for a carousel with multiple slides.
 * The children to be rendered as slides.
 */
export const CarouselWithSlide: Story = {
  args: {
    children: renderSlideMultipleTimes(),
  },
}
