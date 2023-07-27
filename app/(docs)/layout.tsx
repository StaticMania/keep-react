"use client";
import { routes } from "@/routes/routes";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-1">
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
        </div>
        <div className="col-span-5 p-5">{children}</div>
      </div>
    </div>
  );
};

export default DocsLayout;
