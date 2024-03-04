'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Clipboard } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { routes } from '~/routes/routes'
import useCopy from '../hooks/useCopy'
import { Accordion, Avatar } from './src'

interface Contributor {
  login: string
  id: number
  avatar_url: string
}

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentUI />
      <Faq />
      <Community />
    </>
  )
}
const Hero = () => {
  const { copy, copyToClipboard } = useCopy()
  return (
    <section className="-mt-1 bg-metal-25 py-20 md:-mt-0 md:py-32">
      <div className="z-10 mx-auto grid max-w-7xl grid-cols-1 items-center justify-center px-6 lg:grid-cols-2 2xl:px-0">
        <div className="w-full text-center lg:col-span-1 lg:text-left">
          <h1 className="mx-auto mb-3 max-w-xl text-heading-5 font-semibold text-metal-900  sm:text-heading-4 md:text-heading-3 lg:text-heading-4 xl:mx-0 xl:text-heading-3">
            Supercharge Your Web Development with
            <span className="hero-text block">Keep React</span>
          </h1>
          <p className="mx-auto max-w-md text-body-3 text-metal-600 md:max-w-xl xl:mx-0 xl:mr-auto">
            Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
            for efficient development and bring your ideas to life with ease.
          </p>
          <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
            <div className="flex w-[300px] items-center justify-between gap-5 divide-x-2 divide-metal-100 rounded-md  bg-white px-4 py-3">
              <p className="text-body-4 font-normal tracking-wide text-metal-600">npm install keep-react</p>
              <button className="pl-2" onClick={() => copyToClipboard('npm install keep-react')}>
                {copy ? <Check size={18} color="#8897AE" /> : <Clipboard size={18} color="#8897AE" />}
              </button>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/docs/getting-started/Introduction"
                className="rounded-lg bg-metal-900 px-4 py-3 text-body-4 font-normal capitalize text-white transition-all duration-300 hover:bg-metal-800">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:col-span-1 lg:block">
          <Image src="/images/hero.svg" height={805} width={1204} alt="hero" />
        </div>
      </div>
    </section>
  )
}
const ComponentUI = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="my-5 flex items-center justify-between">
          <div className="mx-auto mb-4 px-5 text-center md:max-w-xl md:px-0">
            <h2 className="mb-3 text-heading-6 font-semibold leading-8 text-black lg:text-heading-5">
              Design Excellence with Our React Component Library
            </h2>
            <p className="text-body-5 font-normal leading-6 text-metal-600 md:text-body-3">
              Explore our library of 40+ open-source React UI components and interactive elements, empowering you to
              create stunning web projects effortlessly.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {routes.slice(0, 20).map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="rounded-lg border border-dashed border-metal-200 bg-white px-6 py-2.5 transition-all duration-300 hover:bg-metal-900 hover:text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/docs/getting-started/Introduction"
            className="mt-5 flex items-center gap-2 rounded-lg border border-dashed border-metal-200 bg-white px-6 py-2.5 transition-all duration-300 hover:bg-metal-900 hover:text-white">
            View All Component <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
const Community = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])

  useEffect(() => {
    let ignore = false
    const getUser = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/StaticMania/keep-react/contributors?per_page=10')
        const result = await response.json()
        if (!ignore) {
          setContributors(result)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getUser()

    return () => {
      ignore = true
    }
  }, [])
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="text-center">
          <h4 className="mb-1 text-heading-6 font-semibold leading-8 text-black lg:text-heading-5">
            Join The Community
          </h4>
          <p className="mx-auto max-w-sm text-body-4 font-normal text-metal-600 md:text-body-3">
            Become a member of a community of developers by supporting Keep React
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 lg:flex-row lg:items-stretch">
          <Link
            href="https://discord.gg/xTf6w2nm9Z"
            target="_blank"
            className="flex max-w-[410px] items-start gap-3 rounded-lg bg-[#5865F2] p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="flex w-16 items-center justify-center">
              <Image
                src="/images/icon/discord.svg"
                height={40}
                width={40}
                alt="discord"
                className="rounded-full border border-metal-25"
              />
            </div>
            <div>
              <p className="mb-1 text-body-4 font-medium text-white">Join Discord community</p>
              <p className="text-body-5 font-normal text-white">
                Ask questions, share feedback, get updates, learn about upcoming features and more.
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/StaticMania/keep-react/discussions"
            className="flex max-w-[410px] items-start gap-3 rounded-lg bg-black p-5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex w-16 items-center justify-center">
              <Image src="/images/icon/github.svg" height={40} width={40} alt="github" />
            </div>
            <div>
              <p className="mb-1 text-body-4 font-medium text-white">Start a discussion</p>
              <p className="text-body-5 font-normal text-white">
                Request new features, ask questions and provide feedback with GitHub discussions
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/heystaticmania"
            className="flex max-w-[410px] items-start gap-3 rounded-lg border border-metal-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex w-16 items-center justify-center">
              <div className="flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M18.2856 14.172L27.2216 4H25.1048L17.3424 12.8304L11.1472 4H4L13.3704 17.3544L4 28.02H6.1168L14.3088 18.6928L20.8528 28.02H28M6.8808 5.5632H10.1328L25.1032 26.5336H21.8504"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-1 text-body-4 font-medium text-metal-900">Follow on X</p>
              <p className="text-body-5 font-normal text-metal-900">
                Stay updated on all our latest minor and major releases
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 2xl:px-0">
        <div className="flex flex-col items-start justify-between gap-5 rounded-md bg-[url('https://staticmania.cdn.prismic.io/staticmania/59c3bc39-d8bc-4382-80e9-db3c7f10230d_community.svg')] bg-cover bg-center bg-no-repeat p-8 md:px-8 md:py-10 lg:flex-row lg:items-center lg:gap-0 lg:px-28 lg:py-12">
          <div>
            {contributors?.length ? (
              <Avatar.Group>
                {contributors?.map((user) => <Avatar key={user?.id} shape="circle" size="lg" img={user?.avatar_url} />)}
              </Avatar.Group>
            ) : null}
            <h3 className="mt-2 text-heading-6 font-semibold leading-[50px] tracking-[-1px] text-white md:text-heading-6 lg:text-heading-5">
              Join the community
            </h3>
            <p className="max-w-sm text-body-5 font-normal text-white md:text-body-4">
              Become a member of a community of developers by supporting Keep React
            </p>
          </div>
          <div>
            <Link
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="flex items-center gap-2 rounded-md  bg-metal-900 px-4 py-2.5 text-body-5 text-white hover:bg-metal-800 md:px-6 md:py-3 md:text-body-4">
              See Github Repository
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'Q. What is Keep React?',
      answer:
        'Keep React is an open-source component library built on React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications.',
    },
    {
      id: 2,
      question: 'Q. How can I use Keep React components?',
      answer:
        'To use Keep React components, you can install the library via npm or yarn, import the components you need in your React application, and start using them in your code.',
    },
    {
      id: 3,
      question: 'Q. Is Keep React compatible with other React projects?',
      answer:
        'Yes, Keep React is designed to be compatible with other React projects. You can seamlessly integrate its components into your existing React applications.',
    },
    {
      id: 4,
      question: 'Q. What makes Keep React different from other component libraries?',
      answer:
        'Keep React combines the power of React with the flexibility and utility of Tailwind CSS. It provides a wide range of customizable components to help you build beautiful, responsive, and functional user interfaces.',
    },
    {
      id: 5,
      question: 'Q. Can I customize the styling of Keep React components?',
      answer:
        "Yes, Keep React components are highly customizable. You can use Tailwind CSS utility classes or even create your own styles to tailor the appearance of the components to your project's needs.",
    },
    {
      id: 6,
      question: 'Q. Is Keep React suitable for both small and large-scale applications?',
      answer:
        'Absolutely! Keep React is designed to be versatile, making it suitable for a wide range of projects, from small personal websites to large-scale applications. Its components and styles are designed to scale to your needs.',
    },
  ]

  return (
    <section className="bg-metal-25 py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="mx-auto mb-4 px-5 text-center md:max-w-[500px] md:px-0">
          <h3 className="text-heading-6 font-semibold leading-8 text-black lg:text-heading-5">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <div className="w-full lg:col-span-1">
            <Accordion className="space-y-3">
              {faqs.slice(0, 3).map((faq) => (
                <Accordion.Panel key={faq.id}>
                  <Accordion.Container>
                    <Accordion.Title className="text-body-4 md:text-body-3">{faq.question}</Accordion.Title>
                    <Accordion.Icon />
                  </Accordion.Container>
                  <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>
          <div className="w-full lg:col-span-1">
            <Accordion className="space-y-3">
              {faqs.slice(3).map((faq) => (
                <Accordion.Panel key={faq.id}>
                  <Accordion.Container>
                    <Accordion.Title className="text-body-4 md:text-body-3">{faq.question}</Accordion.Title>
                    <Accordion.Icon />
                  </Accordion.Container>
                  <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
