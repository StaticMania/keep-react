'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clipboard } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '../../hooks/useCopy'
import { cn } from '../src/helpers/cn'

interface CodePreviewProps {
  children: ReactNode
  code: string
  github?: string
  className?: string
  activeTab?: number
  hasData?: boolean
  data?: any
}

const CodePreview = ({ children, code, github, className, activeTab, hasData, data }: CodePreviewProps) => {
  const [active, setActive] = useState(activeTab ?? 0)
  const { copy, copyToClipboard } = useCopy()
  const githubUrl = `https://github.com/StaticMania/keep-react/tree/main/app/src/components/${github}`

  return (
    <div className="my-10 w-full overflow-hidden rounded-xl border border-metal-200 shadow-small dark:border-metal-800">
      <div className="-mb-px flex flex-wrap border-b border-metal-200 bg-metal-900 px-5 text-center">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`-mb-[0.7px] flex items-center justify-center border-b border-b-transparent px-5 py-3 text-body-4 font-medium text-metal-400 first:ml-0 ${
            active === 0 ? '!border-b-white text-white' : ''
          }`}
          id="preview-btn">
          Preview
        </button>
        <button
          id="code-btn"
          onClick={() => setActive(1)}
          className={` flex items-center justify-center border-b border-b-transparent px-5 py-3 text-body-4 font-medium  text-metal-400 first:ml-0 ${
            active === 1 ? '!border-b-metal-100 text-white' : ''
          }`}>
          Code
        </button>

        {hasData ? (
          <button
            id="code-btn"
            onClick={() => setActive(2)}
            className={` flex items-center justify-center border-b border-b-transparent px-5 py-3 text-body-4 font-medium  text-metal-400 first:ml-0 ${
              active === 2 ? '!border-b-metal-100 text-white' : ''
            }`}>
            Data
          </button>
        ) : null}
      </div>

      <div>
        {active === 1 && (
          <div className="relative">
            <div className="absolute -top-10 right-3 flex items-center justify-between gap-3 md:top-5 lg:right-10">
              <Link
                id="github-page-link"
                target="_blank"
                href={githubUrl}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-metal-800 transition-all duration-300 hover:bg-metal-700 md:h-9 md:w-9">
                <Image src="/images/icon/github-white.svg" height={20} width={20} alt="github" />
              </Link>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-metal-800 bg-metal-900 transition-all duration-300 hover:border-transparent hover:bg-metal-700 md:h-9 md:w-9"
                onClick={() => copyToClipboard(code)}>
                {copy ? (
                  <span className="flex items-center text-body-5">
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
        )}

        {active === 0 && (
          <div
            className={cn(
              'flex w-full items-center justify-center bg-white px-2 py-3 dark:bg-black md:p-6',
              className,
            )}>
            <div className="h-full w-full overflow-auto">{children}</div>
          </div>
        )}

        {active === 2 && (
          <div>
            <SyntaxHighlighter
              language="javascript"
              style={coldarkDark}
              showLineNumbers
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
              {data.trim()}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodePreview
