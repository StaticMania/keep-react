"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { Check, Copy, GithubLogo } from "phosphor-react";
import Link from "next/link";

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
}

SyntaxHighlighter.registerLanguage("tsx", tsx);

const CodePreview = ({ children, code }: CodePreviewProps) => {
  const [copy, setCopy] = useState<Boolean>(false);

  const handleCopyToClipboard = ({ text }: { text: string }) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopy(true);
      })
      .catch((error) => {
        console.error(error);
        setCopy(false);
      });
  };

  if (copy) {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }
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
          <div className="relative">
            <div className="absolute top-5 right-10 flex items-center justify-between border border-slate-800">
              <Link
                href="/"
                className="bg-slate-800 hover:bg-slate-200 text-white duration-200 transition-all py-2 px-5 hover:text-slate-800"
              >
                <GithubLogo size={20} />
              </Link>
              <button
                className="bg-slate-800 hover:bg-slate-200 text-white duration-200 transition-all py-2 px-5 hover:text-slate-800"
                onClick={() => handleCopyToClipboard({ text: code })}
              >
                {copy ? (
                  <span className="flex gap-1  text-xs items-center">
                    <Check size={20} />
                    Copied
                  </span>
                ) : (
                  <Copy size={20} />
                )}
              </button>
            </div>

            <SyntaxHighlighter
              language="tsx"
              style={dracula}
              customStyle={{
                height: "380px",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="flex items-center justify-center p-10 border border-slate-100 rounded">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default CodePreview;
