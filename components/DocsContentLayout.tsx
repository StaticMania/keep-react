import type { FC } from "react";
import React from "react";

interface DocsContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * Renders a layout for the content of a documentation page.
 * @param {string} title - The title of the documentation page.
 * @param {string} description - The description of the documentation page.
 * @param {ReactNode} children - The content of the documentation page.
 * @returns {JSX.Element} - The rendered layout component.
 */
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
