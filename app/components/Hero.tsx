'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clipboard } from 'phosphor-react'
import useCopy from '~/hooks/useCopy'
import HeroImg from '../../public/images/home/hero-1.png'
import { buttonVariants } from '../src'

const Hero = () => {
  const { copy, copyToClipboard } = useCopy()
  return (
    <section className="hero-area py-10 md:py-20 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="grid grid-cols-1 items-start justify-between gap-5 lg:grid-cols-2">
          <div className="w-full lg:col-span-1">
            <div className="mt-5">
              <Link
                href="https://www.producthunt.com/posts/keep-react?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-keep&#0045;react"
                target="_blank"
                className="inline-block">
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=423668&theme=dark"
                  alt="Keep Product Hunt"
                  className="h-[40px] w-[200px] lg:h-[54px] lg:w-[250px]"
                />
              </Link>
              <h1 className="mt-3 max-w-xl text-heading-6 !font-semibold text-metal-900 md:text-heading-3 dark:text-white">
                <span className="block">Supercharge your web</span>
                <span className="block">development with</span>
                <span className="hero-text block">Keep React</span>
              </h1>
              <p className="mb-7 mt-2 w-full text-body-4 font-normal text-metal-600 md:max-w-[500px] lg:max-w-[526px] lg:text-body-3 dark:text-metal-300">
                Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source
                resources for efficient development and bring your ideas to life with ease.
              </p>
              <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
                <div className="inline-flex w-[270px] items-center justify-between divide-x-2 divide-metal-100 rounded-lg border border-metal-200 bg-white px-3.5 py-3 dark:border-metal-600 dark:bg-metal-900">
                  <span className="text-body-4 font-normal text-metal-600 dark:text-white">npm install keep-react</span>
                  <button className="pl-2" onClick={() => copyToClipboard('npm install keep-react')}>
                    {copy ? <Check size={18} color="#8897AE" /> : <Clipboard size={18} color="#8897AE" />}
                  </button>
                </div>
                <Link href="/docs/getting-started/introduction" className={buttonVariants({ size: 'lg' })}>
                  Get Started
                </Link>
              </div>
              <p className="mt-2 text-body-4 font-normal text-metal-600 dark:text-metal-300">
                ⭐ Got 1.3k stars on Github Repository
              </p>
            </div>
          </div>
          <div className="w-full lg:col-span-1">
            <Image src={HeroImg} alt="hero" className="lg:scale-[1.2]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
