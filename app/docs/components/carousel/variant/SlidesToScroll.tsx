'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from '~/app/src/components/Carousel/Carousel'

const SlidesToScroll = () => {
  const images = [
    '/images/carousel/1.jpg',
    '/images/carousel/2.jpg',
    '/images/carousel/3.jpg',
    '/images/carousel/4.jpg',
    '/images/carousel/5.jpg',
    '/images/carousel/6.jpg',
    '/images/carousel/7.jpg',
    '/images/carousel/8.jpg',
  ]

  const slides = images.map((src, idx) => (
    <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
      <Image fill src={src} alt={'img' + idx} className="w-full object-cover" />
    </div>
  ))
  return <Carousel slides={slides} options={{ slidesToScroll: 2 }} slideClass="flex-[0_0_50%]" />
}

const SlidesToScrollCode = `
'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from '~/app/src/components/Carousel/Carousel'

const SlidesToScroll = () => {
  const images = [
    '/images/carousel/1.jpg',
    '/images/carousel/2.jpg',
    '/images/carousel/3.jpg',
    '/images/carousel/4.jpg',
  ]

  const slides = images.map((src, idx) => (
    <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
      <Image fill src={src} alt={'img' + idx} className="w-full object-cover" />
    </div>
  ))
  return <Carousel slides={slides} options={{ slidesToScroll: 2 }} slideClass="flex-[0_0_50%]" />
}
`

export { SlidesToScroll, SlidesToScrollCode }
