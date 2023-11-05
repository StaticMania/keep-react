"use client";
import Link from "next/link";
import useCopy from "~/hooks/useCopy";
import { ComponentList } from "~/routes/routes";
import { ArrowUpRight, Check, Clipboard } from "phosphor-react";
import Image from "next/image";
import { Accordion } from "~/src";

export default function Home() {
  return (
    <section className="home space-y-20 lg:space-y-32 first:pt-20 last:pb-20 -mt-1">
      <Hero />
      <ComponentUI />
      <FAQ />
      <Community />
    </section>
  );
}

const ComponentUI = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute -top-[700px] max-w-[1202px] mx-auto z-[-1] left-0 right-0">
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/60f7593e-eb13-48b7-8647-d7846dbdc16d_gradient-bg.svg"
          alt="gradient"
          height={1400}
          width={1280}
        />
      </div>
      <div className="container">
        <div className="text-center mb-4 md:max-w-[500px] mx-auto px-5 md:px-0">
          <h2 className="lg:!leading-[44px] leading-8 font-semibold text-black tracking-[-1px] mb-2 lg:text-8xl text-4xl">
            Design Excellence with Our React Component Library
          </h2>
          <p className="text-center leading-6 font-normal text-slate-600 text-sm md:text-base">
            Explore our library of 40+ open-source React UI components and
            interactive elements, empowering you to create stunning web projects
            effortlessly.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 my-14">
          {ComponentList.map((item) => {
            return (
              <div
                key={item.id}
                className={`group backdrop-blur-sm bg-white/10 h-[244px] w-full rounded-2xl flex items-center justify-center border border-slate-200 md:border-slate-100 relative cursor-pointer`}
              >
                {item.component()}
                <Link
                  href={item.href}
                  className="absolute right-2 bottom-2 p-1 rounded-md translate-y-1 group-hover:translate-y-0 invisible group-hover:visible bg-slate-900 text-white duration-300 transition-all"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/docs/getting-started/Introduction"
            className="px-6 py-3 border border-slate-200 bg-slate-25 hover:bg-slate-900 hover:text-white text-slate-900 rounded-md flex items-center gap-2 text-sm md:text-base transition-all duration-300"
          >
            View All Component
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-center items-start gap-5 lg:gap-0 justify-between bg-[url('https://staticmania.cdn.prismic.io/staticmania/59c3bc39-d8bc-4382-80e9-db3c7f10230d_community.svg')] bg-center bg-cover bg-no-repeat rounded-md lg:px-28 lg:py-12 md:py-10 md:px-8 p-8">
        <div>
          <h3 className="text-white lg:text-8xl md:text-5xl text-4xl font-semibold leading-[50px] tracking-[-1px]">
            Join the community
          </h3>
          <p className="text-white font-normal text-sm md:text-base max-w-sm">
            Become a member of a community of developers by supporting Keep
            React
          </p>
        </div>
        <div>
          <a
            href="https://github.com/StaticMania/keep-react"
            target="_blank"
            className="px-6 py-3 text-sm md:text-base  bg-slate-900 hover:bg-slate-800 text-white rounded-md flex items-center gap-2"
          >
            See Github Repository
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { copy, copyToClipboard } = useCopy();
  return (
    <div className="hero-area">
      <div className="text-center max-w-2xl mx-auto z-10 relative">
        <h1 className="lg:text-[56px] text-black/100 font-semibold lg:leading-[66px] leading-10 tracking-[-1.75px] mb-3 text-8xl">
          Supercharge Your Web Development with
          <span className="hero-text block">Keep React</span>
        </h1>
        <p className="md:text-lg text-sm text-slate-600 max-w-lg mx-auto">
          Unlocking the Power of Code to Transform Your Ideas into Stunning Web
          Realities.
        </p>
        <div className="flex items-center justify-center gap-5 mt-8">
          <div className="flex items-center justify-between gap-5 bg-white py-3 px-4 rounded-md divide-x-2 divide-slate-100">
            <p className="text-sm leading-[22px] tracking-[-0.3px] text-slate-500 font-normal">
              npm install keep-react
            </p>
            <button
              className="pl-2"
              onClick={() => copyToClipboard("npm install keep-react")}
            >
              {copy ? (
                <Check size={18} color="#8897AE" />
              ) : (
                <Clipboard size={18} color="#8897AE" />
              )}
            </button>
          </div>
          <Link
            href="/docs/getting-started/Introduction"
            className="text-sm px-4 py-2.5 transition-all duration-75 ease-in group  h-min w-fit capitalize justify-center text-center font-medium rounded-md text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 active:bg-slate-900 focus:ring-4 focus:ring-slate-800"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="hidden items-center justify-center -mt-20 lg:flex -z-0 relative">
        <Image src="/images/hero.png" alt="hero" height={720} width={1400} />
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Keep React?",
      answer:
        "Keep React is an open-source component library built on React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications.",
    },
    {
      id: 2,
      question: "How can I use Keep React components?",
      answer:
        "To use Keep React components, you can install the library via npm or yarn, import the components you need in your React application, and start using them in your code.",
    },
    {
      id: 3,
      question: "Is Keep React compatible with other React projects?",
      answer:
        "Yes, Keep React is designed to be compatible with other React projects. You can seamlessly integrate its components into your existing React applications.",
    },
    {
      id: 4,
      question:
        "What makes Keep React different from other component libraries?",
      answer:
        "Keep React combines the power of React with the flexibility and utility of Tailwind CSS. It provides a wide range of customizable components to help you build beautiful, responsive, and functional user interfaces.",
    },
    {
      id: 5,
      question: "Can I customize the styling of Keep React components?",
      answer:
        "Yes, Keep React components are highly customizable. You can use Tailwind CSS utility classes or even create your own styles to tailor the appearance of the components to your project's needs.",
    },
    {
      id: 6,
      question:
        "Is Keep React suitable for both small and large-scale applications?",
      answer:
        "Absolutely! Keep React is designed to be versatile, making it suitable for a wide range of projects, from small personal websites to large-scale applications. Its components and styles are designed to scale to your needs.",
    },
  ];

  return (
    <div className="container">
      <div className="text-center mb-4 md:max-w-[500px] mx-auto px-5 md:px-0">
        <h2 className="lg:!leading-[44px] leading-8 font-semibold text-black tracking-[-1px] mb-2 lg:text-8xl text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full mt-12 xl:hidden block">
        <Accordion collapseAll={true} flush>
          {faqs.map((faq) => (
            <Accordion.Panel key={faq.id}>
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
      <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-5 mt-12 hidden">
        <div className="xl:col-span-1 w-full">
          <Accordion collapseAll={true} flush>
            {faqs.slice(0, 3).map((faq) => (
              <Accordion.Panel key={faq.id}>
                <Accordion.Title>{faq.question}</Accordion.Title>
                <Accordion.Content>
                  <p>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
        <div className="xl:col-span-1 w-full">
          <Accordion collapseAll={true} flush>
            {faqs.slice(3, 6).map((faq) => (
              <Accordion.Panel key={faq.id}>
                <Accordion.Title>{faq.question}</Accordion.Title>
                <Accordion.Content>
                  <p>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
