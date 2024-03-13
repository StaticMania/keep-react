import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CarouselEmbla } from './CarouselEmbla'
import Image from 'next/image'

const meta: Meta<typeof CarouselEmbla> = {
  component: CarouselEmbla,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-56 w-full  overflow-hidden sm:h-64 xl:h-80 2xl:h-96">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: { disable: true },
      description: 'Children is CarouselEmbla Image item',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    indicators: {
      description: 'CarouselEmbla indicators show or not?',
      control: { type: 'boolean' },
    },
    showControls: {
      description: 'CarouselEmbla Control button show or not?',
      control: { type: 'boolean' },
    },
    leftControl: {
      control: { disable: true },
      description: 'CarouselEmbla Left Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    rightControl: {
      control: { disable: true },
      description: 'CarouselEmbla Right Control Icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    slide: {
      description: 'CarouselEmbla auto slide?',
      control: { type: 'boolean' },
    },
    slideInterval: {
      description: 'CarouselEmbla Interval Time',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
    },
    indicatorsType: {
      description: 'CarouselEmbla indicator Type',
      control: 'select',
      options: ['dot', 'ring', 'bar', 'square', 'squareRing'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dot' },
      },
    },
    indicatorsTypeColors: {
      description: 'CarouselEmbla indicator color Type',
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
type Story = StoryObj<typeof CarouselEmbla>

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

export const DefaultCarouselEmbla: Story = {
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
export const StaticCarouselEmbla: Story = {
  args: {
    ...DefaultCarouselEmbla.args,
    slide: false,
  },
}
export const CarouselEmblaWithRingIndicator: Story = {
  args: {
    ...DefaultCarouselEmbla.args,
    slide: true,
    indicatorsType: 'ring',
  },
}
export const CarouselEmblaWithBarIndicator: Story = {
  args: {
    ...CarouselEmblaWithRingIndicator.args,
    indicatorsType: 'bar',
  },
}
export const CarouselEmblaWithSquareIndicator: Story = {
  args: {
    ...CarouselEmblaWithRingIndicator.args,
    indicatorsType: 'square',
  },
}

export const CarouselEmblaWithSquareRingIndicator: Story = {
  args: {
    ...CarouselEmblaWithRingIndicator.args,
    indicatorsType: 'squareRing',
  },
}

export const CarouselEmblaWithoutIndicator: Story = {
  args: {
    ...CarouselEmblaWithRingIndicator.args,
    indicators: false,
  },
}
export const CarouselEmblaWithSlide: Story = {
  args: {
    children: renderSlideMultipleTimes(),
  },
}
