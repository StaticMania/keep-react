"use client";
import Link from "next/link";
import useCopy from "~/hooks/useCopy";
import { ComponentList } from "~/routes/routes";
import { ArrowUpRight, Check, CopySimple } from "phosphor-react";
import { AvatarGroupComponent } from "~/components/ComponentsList";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home-page">
      <Hero />
      <ComponentUI />
      <Community />
    </section>
  );
}

const Hero = () => {
  const { copy, copyToClipboard } = useCopy();
  return (
    <div className="md:pt-24 pt-10 hero-area md:h-screen -mt-2">
      <div className="container">
        <div className="text-center px-5 md:px-0">
          <h1 className="max-w-2xl mx-auto text-center md:text-[56px] text-3xl text-black/100 font-semibold md:leading-[66px] leading-9 tracking-[-1.75px] mb-3">
            Build modern website and web applications with{" "}
            <span className="hero-text">Keep React</span>
          </h1>
          <p className="md:text-lg text-sm text-slate-600">
            Create beautiful and consistence user interface with ease.
          </p>
        </div>
        <div className="text-center md:mt-7 mt-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
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
                <CopySimple size={18} color="#8897AE" />
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
    </div>
  );
};

const ComponentUI = () => {
  return (
    <div className="md:pt-5 pt-10 mb-24 relative">
      <div className="absolute lg:-top-[631px] md:-top-[35rem] -top-[120px] w-full md:max-w-[1202px] mx-auto z-[-1] left-0 right-0">
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/60f7593e-eb13-48b7-8647-d7846dbdc16d_gradient-bg.svg"
          alt="gradient"
          height={1400}
          width={1280}
        />
      </div>
      <div className="container">
        <div className="text-center mb-4 md:max-w-[500px] mx-auto px-5 md:px-0">
          <h2 className="text-2xl md:!leading-[44px] leading-8 font-semibold text-black tracking-[-1px] mb-2 md:text-8xl">
            Powerful and Versatile React UI Components
          </h2>
          <p className="text-center leading-6 font-normal text-slate-600 text-sm md:text-base">
            Explore the entire collection of over 100 open-source UI components
            and interactive elements built with React and Tailwind CSS
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
    <div className="md:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center items-start gap-5 lg:gap-0 justify-between bg-[url('https://staticmania.cdn.prismic.io/staticmania/59c3bc39-d8bc-4382-80e9-db3c7f10230d_community.svg')] bg-center bg-cover bg-no-repeat rounded-md lg:px-28 lg:py-12 md:py-10 md:px-8 p-8">
          <div>
            <AvatarGroupComponent />
            <h3 className="mt-4 text-white lg:text-8xl md:text-5xl text-4xl font-semibold leading-[50px] tracking-[-1px]">
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
              See our repository
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
