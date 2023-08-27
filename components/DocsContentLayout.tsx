import type { FC } from "react";
import React from "react";

interface DocsContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const DocsContentLayout: FC<DocsContentLayoutProps> = function ({
  title,
  description,
  children,
}) {
  return (
    <div>
      <div className="mb-[50px]">
        <h1 className="mb-2 inline-block w-full text-2xl md:text-[26px] font-semibold leading-10 tracking-[-0.5px] text-slate-900">
          {title}
        </h1>
        <p className="text-sm md:text-base leading-6 text-slate-700 tracking-[-0.3px]">
          {description}
        </p>
      </div>
      <div id="mainContent">{children}</div>
    </div>
  );
};
