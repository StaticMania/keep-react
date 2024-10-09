'use client'
import { Check, Copy } from 'phosphor-react'
import { FC, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '~/hooks/useCopy'
import { toast } from '../src'
import { cn } from '../src/utils/cn'

interface CodeHighlightProps {
  code: {
    [key: string]: string
  }
}

const CodeHighlight: FC<CodeHighlightProps> = ({ code }) => {
  const [codeType, setCodeType] = useState(0)
  const { copy, copyToClipboard } = useCopy()
  return (
    <div className="my-5 w-full overflow-hidden rounded-xl border border-metal-900 bg-[#0D1015] dark:bg-[#0D1015]/90">
      <div className="flex justify-between">
        <div className="flex text-white">
          {Object.keys(code).map((key, index) => (
            <button
              key={key}
              onClick={() => setCodeType(index)}
              className={cn(
                'border-b border-r border-metal-800  px-6 py-2.5 text-body-4 font-normal',
                codeType === index ? 'bg-metal-900/10' : 'bg-metal-900',
              )}>
              <span>{key}</span>
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              copyToClipboard(Object.values(code)[codeType])
              toast.info('Copied to clipboard')
            }}
            className="mx-6 my-2.5">
            {copy ? <Check size={20} weight="light" color="#fff" /> : <Copy size={20} weight="light" color="#fff" />}
          </button>
        </div>
      </div>
      <div>
        <SyntaxHighlighter
          language="javascript"
          style={coldarkDark}
          customStyle={{
            maxHeight: '420px',
            borderRadius: '0px',
            padding: '32px',
            marginTop: '0px',
            marginBottom: '0px',
            fontSize: '14px',
            lineHeight: '22px',
            letterSpacing: '-0.4px',
          }}>
          {Object.values(code)[codeType].trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeHighlight
