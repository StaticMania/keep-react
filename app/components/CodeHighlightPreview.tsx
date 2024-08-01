'use client'
import { Check, Copy } from 'phosphor-react'
import { forwardRef, HTMLAttributes, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '~/hooks/useCopy'
import { Tooltip, TooltipAction, TooltipContent } from '../src'
import { cn } from '../src/utils/cn'

interface CodeHighlightPreviewProps extends HTMLAttributes<HTMLDivElement> {
  code: {
    [key: string]: string
  }
  activeTab?: number
}

const CodeHighlightPreview = forwardRef<HTMLDivElement, CodeHighlightPreviewProps>(
  ({ children, code, className, activeTab }, ref) => {
    const [active, setActive] = useState(activeTab ?? 0)
    const { copy, copyToClipboard } = useCopy()

    return (
      <div
        ref={ref}
        className={cn(
          'my-10 max-w-full overflow-hidden rounded-xl border border-metal-200 dark:border-metal-800 ',
          className,
        )}>
        <div className="flex items-center justify-between bg-[#0D1015] dark:bg-metal-900/60">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setActive(0)}
              className={cn(
                'border-b border-b-transparent px-6 py-2.5 text-body-4 font-normal',
                active === 0
                  ? 'border-b-metal-800 bg-metal-900/10 text-white dark:border-b-metal-200'
                  : 'bg-metal-800 text-white opacity-50',
              )}
              id="preview-btn">
              Preview
            </button>
            {Object.keys(code).map((key, index) => (
              <button
                key={key}
                onClick={() => setActive(index + 1)}
                className={cn(
                  'border-b border-b-transparent px-6 py-2.5 text-body-4 font-normal',
                  active === index + 1
                    ? 'border-b-metal-200 bg-metal-900/10 text-white'
                    : 'bg-metal-900 text-white opacity-70',
                )}>
                <span>{key}</span>
              </button>
            ))}
          </div>
          <div>
            <Tooltip placement="top">
              <TooltipAction asChild>
                <button
                  onClick={() => copyToClipboard(Object.values(code)[active === 0 ? 0 : active - 1])}
                  className="mx-6 my-2.5">
                  {copy ? (
                    <Check size={20} weight="light" color="#fff" />
                  ) : (
                    <Copy size={20} weight="light" color="#fff" />
                  )}
                </button>
              </TooltipAction>
              <TooltipContent>
                <p className="text-body-5 font-medium text-white dark:text-metal-900">
                  {copy ? 'Copied' : 'Copy Code'}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {active !== 0 && (
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
              {Object.values(code)[active - 1].trim()}
            </SyntaxHighlighter>
          </div>
        )}

        {active === 0 && (
          <div className={cn('bg-white px-2 py-3 md:p-6 dark:bg-[#0D1015]', className)}>
            <div className="h-full w-full overflow-auto">{children}</div>
          </div>
        )}
      </div>
    )
  },
)

CodeHighlightPreview.displayName = 'CodeHighlightPreview'

export default CodeHighlightPreview
