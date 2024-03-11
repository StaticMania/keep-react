'use client'
import Image from 'next/image'
import { Carousel } from '../../../../src'
import { ArrowLineLeft, ArrowLineRight } from 'phosphor-react'
import CarouselOne from '../../../../../public/images/carousel/one.svg'
import CarouselTwo from '../../../../../public/images/carousel/two.svg'
import CarouselThree from '../../../../../public/images/carousel/three.svg'
import CarouselFour from '../../../../../public/images/carousel/four.svg'

const CarouselWithCustomControlIcon = () => {
  return (
    <Carousel
      showControls={true}
      leftControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineLeft size={20} weight="bold" color="white" />
        </span>
      }
      rightControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineRight size={20} weight="bold" color="white" />
        </span>
      }>
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </Carousel>
  )
}

const CarouselWithCustomControlIconCode = `
"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";

export const CarouselComponent = () => {
  return (
    <Carousel
      showControls={true}
      leftControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineLeft size={20} weight="bold" color="white" />
        </span>
      }
      rightControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineRight size={20} weight="bold" color="white" />
        </span>
      }>
      <Image src={CarouselOne} alt="slider-1" />
      <Image src={CarouselTwo} alt="slider-2" />
      <Image src={CarouselThree} alt="slider-3" />
      <Image src={CarouselFour} alt="slider-4" />
    </Carousel>
  )
}
`

export { CarouselWithCustomControlIcon, CarouselWithCustomControlIconCode }
