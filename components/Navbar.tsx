"use client";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "~/src";
import { useEffect, useState } from "react";
import { DocSearch } from "@docsearch/react";
import { usePathname } from "next/navigation";
import { CaretDown, CaretUp, List, X } from "phosphor-react";
import { gettingStartedRoutes, navbarRoutes, routes } from "~/routes/routes";
import "@docsearch/css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split("/").pop();
    return str.toLocaleLowerCase() === "/" + lastPart;
  };

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <header className="bg-white fixed top-0 w-full border-b border-slate-100 z-50">
      <div className="2xl:container relative px-6">
        <nav className="flex items-center justify-between py-4 ">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image
                width="113"
                height="40"
                src="/images/keepLogo.svg"
                alt="Keep React"
              />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              {navbarRoutes.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.href}
                  target={nav.redirect ? "_blank" : "_self"}
                  className="text-sm font-normal leading-[22px] tracking-[-0.2px] text-slate-500 hover:text-slate-900 active:text-slate-900"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:flex items-center gap-3 hidden">
            <div>
              <DocSearch
                appId="Z0C31MASPO"
                indexName="keep-design"
                apiKey="efc95879a56f785250b1da08b43e8c19"
              />
            </div>

            <a
              className="bg-primary-25 hover:bg-primary-50 p-3 rounded-md"
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
            >
              <Image
                src="/images/icon/github.svg"
                height={20}
                width={20}
                alt="github"
              />
            </a>
            <Link
              href="/docs/getting-started/Introduction"
              className="text-sm px-4 py-2.5 transition-all duration-75 ease-in group  h-min w-fit capitalize justify-center text-center font-medium rounded-md text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 active:bg-slate-900 focus:ring-4 focus:ring-slate-800"
            >
              get started
            </Link>
          </div>
          <div className="lg:hidden flex items-center justify-between gap-4">
            <div>
              <DocSearch
                appId="Z0C31MASPO"
                indexName="keep-design"
                apiKey="efc95879a56f785250b1da08b43e8c19"
              />
            </div>
            <a href="https://github.com/StaticMania/keep-react" target="_blank">
              <Image
                src="/images/icon/github.svg"
                height={24}
                width={24}
                alt="github"
              />
            </a>
            <button onClick={() => setActive(!active)}>
              {active ? (
                <span>
                  <X size={24} color="#000000" />
                </span>
              ) : (
                <span>
                  <List size={24} color="#000000" />
                </span>
              )}
            </button>
          </div>
          <div
            id="linkPage"
            className={`lg:hidden fixed h-screen w-72 bg-white right-0 top-[73px] overflow-y-auto border-l border-l-slate-100 pl-8 transition-all duration-300 ${
              active ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mt-5 pr-4 space-y-3">
              <Accordion
                flush
                className="bg-transparent border-none"
                closeIcon={<CaretDown size={18} color="#000000e6" />}
                openIcon={<CaretUp size={18} color="#000000e6" />}
                iconPosition="right"
              >
                <Accordion.Panel>
                  <Accordion.Title
                    theme={{
                      base: "flex w-full items-center text-left font-semibold text-sm leading-[22px] tracking-[-0.2px] text-black/100 hover:text-black",
                    }}
                  >
                    Quick Link
                  </Accordion.Title>
                  <Accordion.Content
                    theme={{
                      base: "text-slate-500 font-normal",
                    }}
                  >
                    <ul className="mt-3 space-y-2 border-l border-l-slate-100 -ml-px">
                      {navbarRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`text-slate-500 text-sm -ml-px leading-[28px] tracking-[-0.2px]  pl-3 hover:text-slate-900 border-l border-l-transparent hover:border-l hover:-ml-px hover:border-slate-500 ${
                              IsActive(route.href)
                                ? "text-slate-900 border-l !border-slate-900 transition-all duration-150"
                                : ""
                            }`}
                            href={route.href}
                          >
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion
                flush
                className="bg-transparent border-none"
                closeIcon={<CaretDown size={18} color="#000000e6" />}
                openIcon={<CaretUp size={18} color="#000000e6" />}
                iconPosition="right"
              >
                <Accordion.Panel>
                  <Accordion.Title
                    theme={{
                      base: "flex w-full items-center text-left font-semibold text-sm leading-[22px] tracking-[-0.2px] text-black/100 hover:text-black",
                    }}
                  >
                    Getting Started
                  </Accordion.Title>
                  <Accordion.Content
                    theme={{
                      base: "text-slate-500 font-normal",
                    }}
                  >
                    <ul className="mt-3 space-y-2 border-l border-l-slate-100 -ml-px">
                      {gettingStartedRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`text-slate-500 text-sm -ml-px leading-[28px] tracking-[-0.2px]  pl-3 hover:text-slate-900 border-l border-l-transparent hover:border-l hover:-ml-px hover:border-slate-500 ${
                              IsActive(route.href)
                                ? "text-slate-900 border-l !border-slate-900 transition-all duration-150"
                                : ""
                            }`}
                            href={route.href}
                          >
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion
                flush
                closeIcon={<CaretDown size={18} color="#000000e6" />}
                openIcon={<CaretUp size={18} color="#000000e6" />}
                iconPosition="right"
                className="bg-transparent border-none"
                collapseAll={true}
              >
                <Accordion.Panel>
                  <Accordion.Title
                    theme={{
                      base: "flex w-full items-center text-left font-semibold text-sm leading-[22px] tracking-[-0.2px] text-black/100 hover:text-black",
                    }}
                  >
                    Components
                  </Accordion.Title>
                  <Accordion.Content
                    theme={{
                      base: "",
                    }}
                  >
                    <ul className="mt-3 pb-24 space-y-2 border-l border-l-slate-100">
                      {routes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`text-slate-500 text-sm -ml-px leading-[28px] tracking-[-0.2px]  pl-3 hover:text-slate-900 border-l border-l-transparent hover:border-l hover:-ml-px hover:border-slate-500 ${
                              IsActive(route.href)
                                ? "text-slate-900 border-l !border-slate-900 transition-all duration-150"
                                : ""
                            }`}
                            href={route.href}
                          >
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
