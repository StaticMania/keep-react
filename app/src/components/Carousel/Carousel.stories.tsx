import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import { default as autoPlay } from 'embla-carousel-autoplay'
import { default as classNames } from 'embla-carousel-class-names'
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

const images = ['/images/carousel/1.jpg', '/images/carousel/2.jpg', '/images/carousel/3.jpg', '/images/carousel/4.jpg']

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

export const Loop: Story = {
  args: {
    ...DefaultCarousel.args,
    slideClass: 'flex-[0_0_70%]',
    options: {
      loop: true,
    },
  },
}

export const SlidesToScroll: Story = {
  args: {
    ...DefaultCarousel.args,
    slideClass: 'flex-[0_0_50%]',
    options: {
      slidesToScroll: 2,
    },
  },
}

export const Autoplay: Story = {
  args: {
    ...DefaultCarousel.args,
    options: {
      loop: true,
    },
    slideClass: 'flex-[0_0_70%]',
    carouselPlugins: [autoPlay({ playOnInit: true, delay: 3000 })],
  },
}

export const ClassNames: Story = {
  args: {
    ...DefaultCarousel.args,
    options: {
      loop: true,
    },
    slideClass: 'flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]',
    carouselPlugins: [classNames()],
  },
}
