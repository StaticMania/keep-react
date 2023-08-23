"use client";
import { Button } from "@/src/components/Button";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { Toggle } from "@/src/components/Switch";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleChange = (action: boolean) => {
    setActive(action);
  };
  return (
    <header className="bg-white fixed w-full border-b border-slate-100 z-[999]">
      <div className="2xl:container px-5">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image
                width="113"
                height="40"
                src="/images/keepLogo.svg"
                alt="keep Design System"
              />
            </Link>
            <div className="hidden xl:flex lg:items-center lg:ml-auto lg:space-x-10">
              <Link
                href="/"
                className="text-base font-medium text-slate-500 active:text-slate-900 transition-all duration-200 hover:text-slate-900 focus:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/docs/getting-started/Introduction"
                className="text-base font-medium text-slate-500 active:text-slate-900 transition-all duration-200 hover:text-slate-900 focus:text-slate-900"
              >
                Documentation
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-slate-500 active:text-slate-900 transition-all duration-200 hover:text-slate-900 focus:text-slate-900"
              >
                Figma
              </Link>

              <Link
                href="/"
                className="text-base font-medium text-slate-500 active:text-slate-900 transition-all duration-200 hover:text-slate-900 focus:text-slate-900"
              >
                Resources
              </Link>
            </div>
          </div>

          <div className="lg:flex gap-3 hidden">
            <TextInput
              id="#id-yml3mm"
              placeholder="Search Anything"
              color="gray"
              sizing="md"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            />

            <Button size="md">
              <Image
                src="/images/icon/github.svg"
                height={20}
                width={20}
                alt="github"
              />
            </Button>
            <div className="hidden bg-primary-25 items-center justify-center rounded-md px-3 border border-transparent hover:bg-primary-50 active:bg-primary-50 focus:ring-4 focus:ring-primary-50">
              <Toggle
                bgColor="slate"
                label=""
                size="sm"
                withIcon={true}
                onChange={handleChange}
              />
            </div>

            <button className="text-sm px-4 py-2.5 transition-all duration-75 ease-in group  h-min w-fit capitalize justify-center text-center font-medium rounded-md text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 active:bg-slate-900 focus:ring-4 focus:ring-slate-800  ">
              get started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
