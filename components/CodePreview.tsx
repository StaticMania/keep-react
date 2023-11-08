/**
 * A component that displays a preview of some code and allows the user to switch between the preview and the code itself.
 * @param children The content to display in the preview.
 * @param code The code to display.
 * @param github The path to the code on GitHub.
 */

"use client";
import { useState } from "react";
import { Check, Clipboard } from "phosphor-react";
import Image from "next/image";
import useCopy from "~/hooks/useCopy";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";


// Define the props for the CodePreview component
interface CodePreviewProps {
  children: React.ReactNode; // The rendered output of the code
  code: string; // The actual code to be displayed
  github?: string; // Optional GitHub link for the code
}

// CodePreview component definition
const CodePreview = ({ children, code, github }: CodePreviewProps) => {
  // State for managing the active tab (0 for Preview, 1 for Code)
  const [active, setActive] = useState(0);
  // Custom hook for handling copy to clipboard functionality
  const { copy, copyToClipboard } = useCopy();
  // Construct the GitHub URL for the code
  const githubUrl = `https://github.com/StaticMania/keep-react/tree/main/src/components/${github}`;

  // Return the CodePreview component
  return (
    <div className="border border-slate-200 rounded-md my-10 shadow-sm overflow-hidden w-full">
      <div className="flex text-center flex-wrap -mb-px bg-white border-slate-200 border-b px-5">
        {/* Button to switch to the Preview tab */}
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`-mb-[0.7px] flex items-center justify-center border-b border-b-transparent px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-400 first:ml-0 ${
            active === 0 ? '!border-b-slate-900 text-slate-900' : ''
          }`}
          id="preview-btn">
          Preview
        </button>

        {/* Button to switch to the Code tab */}

        <button
          id="code-btn"
          onClick={() => setActive(1)}
          className={` flex items-center justify-center border-b border-b-transparent px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-400 first:ml-0 ${
            active === 1 ? '!border-b-slate-900 text-slate-900' : ''
          }`}>
          Code
        </button>
      </div>

      <div>
        {active ? (
          <div className="relative">
            <div className="absolute md:top-5 -top-10 lg:right-10 right-3 flex items-center justify-between gap-3">
              {/* Link to the GitHub page for the code */}
              <a
                id="github-page-link"
                target="_blank"
                href={githubUrl}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 transition-all duration-300 hover:bg-slate-700 md:h-9 md:w-9">
                <Image src="/images/icon/github-white.svg" height={20} width={20} alt="github" />
              </a>
              {/* Button to copy the code to the clipboard */}

              <button
                className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-slate-800 bg-slate-900 transition-all duration-300 hover:border-transparent hover:bg-slate-700 md:h-9 md:w-9"
                onClick={() => copyToClipboard(code)}>
                {copy ? (
                  <span className="flex items-center text-xs">
                    <Check size={20} color="white" />
                  </span>
                ) : (
                  <Clipboard size={20} color="white" />
                )}
              </button>
            </div>
            {/* Syntax highlighter for displaying the code */}

            <SyntaxHighlighter
              language="javascript"
              style={coldarkDark}
              customStyle={{
                maxHeight: '420px',
                borderRadius: '0px',
                paddingLeft: '40px',
                paddingBottom: '20px',
                marginTop: '0px',
                marginBottom: '0px',
                background: '#1C222B',
                fontSize: '14px',
                lineHeight: '22px',
                letterSpacing: '-0.2px',
              }}>
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        ) : (
          // Display the rendered output of the code
          <div className="md:p-6 px-2 py-3 w-full flex items-center justify-center">
            <div className="w-full h-full overflow-auto">{children}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodePreview
