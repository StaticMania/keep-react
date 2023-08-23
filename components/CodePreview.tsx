"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "phosphor-react";
import Link from "next/link";
import Image from "next/image";

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
}

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
    <div className="border border-slate-200 rounded-md my-10 shadow-sm overflow-hidden">
      <div className="flex text-center flex-wrap -mb-px bg-white border-slate-200 border-b px-5">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`flex -mb-[0.7px] items-center justify-center px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] first:ml-0 text-slate-400 border-b border-b-transparent  ${
            active === 0 ? "text-slate-900 !border-b-slate-900" : ""
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActive(1)}
          className={`flex items-center justify-center px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] first:ml-0 text-slate-400 border-b border-b-transparent  ${
            active === 1 ? "text-slate-900 !border-b-slate-900" : ""
          }`}
        >
          Code
        </button>
      </div>

      <div>
        {active ? (
          <div className="relative">
            <div className="absolute top-5 right-10 flex items-center justify-between gap-3">
              <Link
                href="/"
                className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 h-9 w-9 flex items-center justify-center rounded-md"
              >
                <Image
                  src="/images/icon/github-white.svg"
                  height={20}
                  width={20}
                  alt="github"
                />
              </Link>
              <button
                className="bg-slate-900 border-2 border-slate-800 hover:bg-slate-700 hover:border-transparent transition-all duration-300 h-9 w-9 flex items-center justify-center rounded-md"
                onClick={() => handleCopyToClipboard({ text: code })}
              >
                {copy ? (
                  <span className="flex text-xs items-center">
                    <Check size={20} color="white" />
                  </span>
                ) : (
                  <Copy size={20} color="white" />
                )}
              </button>
            </div>
            <SyntaxHighlighter
              language="jsx"
              style={coldarkDark}
              customStyle={{
                maxHeight: "420px",
                borderRadius: "0px",
                paddingLeft: "40px",
                paddingBottom: "30px",
                marginTop: "0px",
                background: "#1C222B",
                fontSize: "14px",
                lineHeight: "28px",
                letterSpacing: "-0.2px",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="p-5 mix-h-[420px] flex items-center justify-center">
            <div className="w-full h-full">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
