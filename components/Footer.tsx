"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`bg-white shadow-sm ${pathname === "/" ? "" : "hidden"}`}
    >
      <div className="container py-10">
        <div className="flex flex-col md:flex-row md:gap-0 md:items-center items-start gap-8 justify-between">
          <div>
            <Link href="/" className="flex">
              <Image
                width="113"
                height="40"
                src="/images/keepLogo.svg"
                alt="Keep React"
              />
            </Link>
            <p className="text-base text-slate-700 font-normal leading-[22px] tracking-[-0.3px] mt-6 max-w-lg">
              Keep React is an open-source component library built on Tailwind
              CSS and React.js. It provides a versatile set of pre-designed UI
              components to build modern web applications.
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium text-slate-900 mb-3 uppercase">
              RESOURCES
            </h4>
            <ul className="text-base font-normal text-slate-700 flex flex-col gap-3">
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
        <p className="text-base font-normal text-slate-900">
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

export default Footer;
