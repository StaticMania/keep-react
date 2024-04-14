'use client'
import { Check, Clipboard } from 'phosphor-react'
import { FC } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '~/hooks/useCopy'

interface HighlightCodeProps {
  code: string
}

const HighlightCode: FC<HighlightCodeProps> = ({ code }) => {
  const { copy, copyToClipboard } = useCopy()
  return (
    <div className="relative my-10 w-full overflow-hidden rounded-xl border border-metal-200 shadow-small">
      <div className="absolute -top-10 right-3 flex items-center justify-between gap-3 md:top-5 lg:right-10">
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
  )
}

export default HighlightCode
