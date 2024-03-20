import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Embla api option for customizing the carousel',
      table: {
        type: { summary: 'EmblaOptionsType' },
      },
    },
    slides: {
      description: 'Carousel items',
      table: {
        type: { summary: 'array' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const images = [
  '/images/carousel/one.svg',
  '/images/carousel/two.svg',
  '/images/carousel/three.svg',
  '/images/carousel/four.svg',
]

const slides = images.map((src, idx) => (
  <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
    <Image fill src={src} alt={`img ${idx}`} className="w-full object-cover" />
  </div>
))

export const DefaultCarousel: Story = {
  args: {
    options: {},
    slides,
  },
}
