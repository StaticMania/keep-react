"use client";
import { routes } from "@/routes/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [tableOfContents, setTableOfContents] = useState("");
  useEffect(() => {
    const toc = document.querySelector("#table-of-contents + ul")?.innerHTML;
    setTableOfContents(toc ?? "");
  }, [pathname]);
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-12 gap-5">
        <aside className="lg:col-span-2 lg:block hidden">
          <div className="py-5 px-4 border-r border-r-slate-100">
            <ul className="flex flex-col gap-2">
              {routes.map((route) => (
                <li key={route.id}>
                  <Link
                    className={pathname === route.href ? "font-bold" : ""}
                    href={route.href}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9 col-span-12 lg:block w-full">
          <div className="flex-grow overflow-y-auto p-4">{children}</div>
        </div>
        <aside className="lg:col-span-1 lg:block hidden">
          <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
            <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
              <div className="mb-8">
                <h4 className="my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                  On this page
                </h4>
                <nav id="visible-table-of-contents">
                  <ul dangerouslySetInnerHTML={{ __html: tableOfContents }} />
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DocsLayout;
