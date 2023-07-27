"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";

interface CodePreviewProps {
  element: React.ReactNode;
  code: string;
}

SyntaxHighlighter.registerLanguage("tsx", tsx);

const CodePreview = ({ element, code }: CodePreviewProps) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex text-center flex-wrap -mb-px border-slate-200 border-b my-10">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`flex items-center justify-center px-5 py-2.5 text-base font-medium first:ml-0 text-slate-900  ${
            active === 0 ? "tabActive" : ""
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActive(1)}
          className={`flex items-center justify-center px-5 py-2.5 text-base font-medium first:ml-0 text-slate-900  ${
            active === 1 ? "tabActive" : ""
          }`}
        >
          Code
        </button>
      </div>

      <div className="my-5">
        {active ? (
          <SyntaxHighlighter language="tsx" style={dracula}>
            {code}
          </SyntaxHighlighter>
        ) : (
          <div className="flex items-center justify-center p-10 border border-slate-100 rounded">
            {element}
          </div>
        )}
      </div>
    </>
  );
};

export default CodePreview;
