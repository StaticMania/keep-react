"use client";
import Link from "next/link";
import { Accordion } from "~/src";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CaretDown, CaretUp } from "phosphor-react";
import { gettingStartedRoutes, routes } from "~/routes/routes";
import Image from "next/image";

export interface Sections {
  id: number;
  idName: string;
}

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [allSection, setAllSection] = useState<NodeListOf<Element> | []>([]);

  const [tableOfContents, setTableOfContents] =
    useState<HTMLUListElement | null>(null);

  // get the table of contents
  useEffect(() => {
    const toc = document.querySelector<HTMLUListElement>(
      "#table-of-contents + ul"
    );
    const sections: NodeListOf<Element> =
      document?.querySelectorAll(".section-title");

    if (sections !== null && sections.length > 0) {
      setAllSection(sections);
    }
    setTableOfContents(toc);
  }, [pathname]);

  // link is active or not active
  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split("/").pop();
    const strLastPart = str.toLocaleLowerCase().split("/").pop();
    return strLastPart === lastPart;
  };

  const newIdArr: Sections[] = Array.from(allSection).map((section, index) => ({
    id: index + 1,
    idName: section.id,
  }));

  if (tableOfContents) {
    const linkElements = tableOfContents.querySelectorAll("li a");

    linkElements.forEach((link) => {
      const href = link.getAttribute("href");
      if ("#" + activeSection === href) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  }

  // On this page active section html
  const innerHtml = tableOfContents?.innerHTML;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      for (const section of newIdArr) {
        const element = document.getElementById(section.idName);
        if (element) {
          const offsetTop = element.offsetTop;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + element.clientHeight
          ) {
            setActiveSection(section.idName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [newIdArr]);

  return (
    <section className="2xl:container pt-12">
      <aside
        id="linkPage"
        className="lg:block hidden fixed top-20 pt-8  z-20  left-0 lg:w-[calc(100vw-75vw)] 2xl:w-[calc(100%-75%)] bg-white  overflow-y-auto h-screen border-r border-r-slate-100"
      >
        <div className="pr-3 space-y-3 w-56 ml-auto">
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
      </aside>
      <main className="lg:pl-[calc(100vw-75vw)] lg:w-[calc(100vw-5vw)]  md:w-[calc(100vw-10vw)] mx-auto xl:pl-[calc(100vw-85vw)] xl:pr-[calc(100vw-95vw)] xl:w-[calc(100vw-25vw)] 2xl:pl-[calc(100vw-93vw)] 2xl:pr-[calc(100vw-98vw)] 2xl:w-[calc(100vw-40vw)]">
        <div className="overflow-y-auto px-4">
          {children}
          <DocsFooter />
        </div>
      </main>
      <aside
        id="linkPage"
        className="xl:block hidden fixed z-20 top-16 bottom-0 lg:w-[calc(100vw-80vw)] xl:w-[calc(100vw-82vw)] 2xl:w-[calc(100vw-86vw)] right-[max(0px,calc(50%-51rem))] pt-12 overflow-y-auto h-[calc(100vh-3rem)]"
      >
        <div className="pl-5">
          <div className="flex flex-col justify-between overflow-y-auto">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[-0.2px] leading-[22px] text-black/100">
              On this page
            </h4>
            <nav id="visible-table-of-contents">
              <ul
                dangerouslySetInnerHTML={{
                  __html: innerHtml ? innerHtml : "",
                }}
                className="border-l border-l-slate-100"
              />
            </nav>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default DocsLayout;

const DocsFooter = () => {
  return (
    <footer className="bg-white shadow-sm mt-10">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row md:gap-0 md:items-center items-start gap-8 justify-between">
          <div>
            <Link href="/" className="flex">
              <Image
                width="113"
                height="40"
                src="/images/keepLogo.svg"
                alt="keep Design System"
              />
            </Link>
            <p className="text-sm text-slate-700 font-normal leading-[22px] tracking-[-0.3px] mt-6 max-w-md">
              Keep React is an open-source component library built on Tailwind
              CSS and React.js. It provides a versatile set of pre-designed UI
              components to build modern web applications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-3 uppercase">
              RESOURCES
            </h4>
            <ul className="text-sm font-normal text-slate-700 flex flex-col gap-3">
              <li>
                <a
                  href="https://github.com/StaticMania/keep-react"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/J2i6VhncmepyLt8OS7i0GQ/Keep-Design-System---Pro-Version---Preview?type=design&node-id=2411-87283&mode=design&t=sYkDt6aaEl1EGXgV-0"
                  target="_blank"
                >
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-5 border-t border-t-slate-100">
        <p className="text-sm font-normal text-slate-900">
          &copy;{new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            href="https://staticmania.com/"
            target="_blank"
            className="font-medium"
          >
            StaticMania
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
