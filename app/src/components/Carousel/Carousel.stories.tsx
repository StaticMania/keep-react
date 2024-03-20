import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Carousel } from './Carousel'
import Image from 'next/image'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-56 w-full  overflow-hidden  sm:h-64 xl:h-80 2xl:h-96">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    config: {
      description: 'Embla Carousel Options',
      table: {
        type: { summary: 'EmblaOptionsType' },
      },
    },
    children: {
      control: { disable: true },
      description: 'Children is Carousel Image item',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    indicators: {
      description: 'Carousel indicators show or not?',
      control: { type: 'boolean' },
    },
    showControls: {
      description: 'Carousel Control button show or not?',
      control: { type: 'boolean' },
    },
    leftControl: {
      control: { disable: true },
      description: 'Carousel Left Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    rightControl: {
      control: { disable: true },
      description: 'Carousel Right Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    slide: {
      description: 'Carousel auto slide?',
      control: { type: 'boolean' },
    },
    slideInterval: {
      description: 'Carousel Interval Time',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
    },
    indicatorsType: {
      description: 'Carousel indicator Type',
      control: 'select',
      options: ['dot', 'ring', 'bar', 'square', 'squareRing'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dot' },
      },
    },
    indicatorsTypeColors: {
      description: 'Carousel indicator color Type',
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

export const DefaultCarousel: Story = {
  args: {
    config: {},
    showControls: true,
    indicators: true,
    indicatorsType: 'dot',
    indicatorsTypeColors: 'white',
    children: renderImageMultipleTimes(),
  },
}
export const StaticCarousel: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: false,
  },
}
export const CarouselWithRingIndicator: Story = {
  args: {
    ...DefaultCarousel.args,
    slide: true,
    indicatorsType: 'ring',
  },
}
export const CarouselWithBarIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'bar',
  },
}
export const CarouselWithSquareIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'square',
  },
}

export const CarouselWithSquareRingIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicatorsType: 'squareRing',
  },
}

export const CarouselWithoutIndicator: Story = {
  args: {
    ...CarouselWithRingIndicator.args,
    indicators: false,
  },
}
export const CarouselWithSlide: Story = {
  args: {
    children: renderSlideMultipleTimes(),
  },
}
