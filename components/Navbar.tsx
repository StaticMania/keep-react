"use client";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "~/src";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CaretDown, CaretUp, List, MagnifyingGlass, X } from "phosphor-react";
import { gettingStartedRoutes, navbarRoutes, routes } from "~/routes/routes";
import Search from "./Search";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showModal, setShowMainModal] = useState(false);
  const pathname = usePathname();

  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split("/").pop();
    return str.toLocaleLowerCase() === "/" + lastPart;
  };

  useEffect(() => {
    setActive(false);
    setShowMainModal(false);
  }, [pathname]);

  const handleModal = () => {
    setShowMainModal(!showModal);
  };

  return (
    <header className="bg-white fixed top-0 w-full border-b border-slate-100 z-50">
      <div className="2xl:container relative px-6">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image
                width={130}
                src="/images/keep.svg"
                height={53}
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
          {showModal && (
            <Search setShowMainModal={setShowMainModal} showModal={showModal} />
          )}
          <div className="lg:flex items-end gap-3 hidden">
            <button
              onClick={handleModal}
              className="sm:p-3 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <span>
                <MagnifyingGlass size={20} color="#455468" />
              </span>
            </button>
            <a
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="sm:p-3 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <Image
                src="/images/icon/github.svg"
                height={20}
                width={20}
                alt="github"
              />
            </a>
            <a
              href="https://keep-storybook.vercel.app"
              target="_blank"
              className="sm:p-3 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
            </a>
            <Link
              href="/docs/getting-started/Introduction"
              className="text-sm px-4 py-2.5 transition-all duration-75 ease-in group  h-min w-fit capitalize justify-center text-center font-medium rounded-md text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 active:bg-slate-900 focus:ring-4 focus:ring-slate-800"
            >
              get started
            </Link>
          </div>
          <div className="lg:hidden flex items-center justify-between gap-3">
            <button
              onClick={handleModal}
              className="sm:p-2.5 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <span>
                <MagnifyingGlass size={20} color="#455468" />
              </span>
            </button>

            <a
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="sm:p-2.5 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <Image
                src="/images/icon/github.svg"
                height={20}
                width={20}
                alt="github"
              />
            </a>
            <a
              href="https://keep-storybook.vercel.app"
              target="_blank"
              className="sm:p-2.5 hover:bg-primary-50 sm:bg-primary-25 rounded"
            >
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
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
