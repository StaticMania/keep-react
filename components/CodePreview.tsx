"use client";
import { useState } from "react";
import { Check, Clipboard } from "phosphor-react";
import Image from "next/image";
import useCopy from "~/hooks/useCopy";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
  github?: string;
}
const CodePreview = ({ children, code, github }: CodePreviewProps) => {
  const [active, setActive] = useState(0);
  const { copy, copyToClipboard } = useCopy();
  const githubUrl = `https://github.com/StaticMania/keep-react/tree/master/src/components/${github}`;
  return (
    <div className="border border-slate-200 rounded-md my-10 shadow-sm overflow-hidden w-full">
      <div className="flex text-center flex-wrap -mb-px bg-white border-slate-200 border-b px-5">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`flex -mb-[0.7px] items-center justify-center px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] first:ml-0 text-slate-400 border-b border-b-transparent ${
            active === 0 ? "text-slate-900 !border-b-slate-900" : ""
          }`}
          id="preview-btn"
        >
          Preview
        </button>
        <button
          id="code-btn"
          onClick={() => setActive(1)}
          className={` flex items-center justify-center px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] first:ml-0 text-slate-400 border-b border-b-transparent ${
            active === 1 ? "text-slate-900 !border-b-slate-900" : ""
          }`}
        >
          Code
        </button>
      </div>

      <div>
        {active ? (
          <div className="relative">
            <div className="absolute md:top-5 -top-10 lg:right-10 right-3 flex items-center justify-between gap-3">
              <a
                id="github-page-link"
                target="_blank"
                href={githubUrl}
                className=" bg-slate-800 hover:bg-slate-700 transition-all duration-300 md:h-9 md:w-9 h-8 w-8 flex items-center justify-center rounded-md"
              >
                <Image
                  src="/images/icon/github-white.svg"
                  height={20}
                  width={20}
                  alt="github"
                />
              </a>
              <button
                className="bg-slate-900 border-2 border-slate-800 hover:bg-slate-700 hover:border-transparent transition-all duration-300 md:h-9 md:w-9 h-8 w-8 flex items-center justify-center rounded-md"
                onClick={() => copyToClipboard(code)}
              >
                {copy ? (
                  <span className="flex text-xs items-center">
                    <Check size={20} color="white" />
                  </span>
                ) : (
                  <Clipboard size={20} color="white" />
                )}
              </button>
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={coldarkDark}
              customStyle={{
                maxHeight: "420px",
                borderRadius: "0px",
                paddingLeft: "40px",
                paddingBottom: "20px",
                marginTop: "0px",
                marginBottom: "0px",
                background: "#1C222B",
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: "-0.2px",
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="md:p-6 px-2 py-3 w-full flex items-center justify-center">
            <div className="w-full h-full overflow-auto">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
