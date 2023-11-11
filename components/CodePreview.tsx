'use client'
import Image from 'next/image'
import { Check, Clipboard } from 'phosphor-react'
import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '~/hooks/useCopy'

interface CodePreviewProps {
  children: React.ReactNode
  code: string
  github?: string
}

const CodePreview = ({ children, code, github }: CodePreviewProps) => {
  const [active, setActive] = useState(0)
  const { copy, copyToClipboard } = useCopy()
  const githubUrl = `https://github.com/StaticMania/keep-react/tree/main/src/components/${github}`

  return (
    <div className="my-10 w-full overflow-hidden rounded-md border border-slate-200 shadow-sm">
      <div className="-mb-px flex flex-wrap border-b border-slate-200 bg-white px-5 text-center">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`-mb-[0.7px] flex items-center justify-center border-b border-b-transparent px-5 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-400 first:ml-0 ${
            active === 0 ? '!border-b-slate-900 text-slate-900' : ''
          }`}
          id="preview-btn">
          Preview
        </button>
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
            <div className="absolute -top-10 right-3 flex items-center justify-between gap-3 md:top-5 lg:right-10">
              <a
                id="github-page-link"
                target="_blank"
                href={githubUrl}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 transition-all duration-300 hover:bg-slate-700 md:h-9 md:w-9">
                <Image src="/images/icon/github-white.svg" height={20} width={20} alt="github" />
              </a>
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
          <div className="flex w-full items-center justify-center px-2 py-3 md:p-6">
            <div className="h-full w-full overflow-auto">{children}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodePreview
