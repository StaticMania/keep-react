'use client'
import { Check, Copy } from 'phosphor-react'
import { forwardRef, HTMLAttributes, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { toast } from 'sonner'
import useCopy from '~/hooks/useCopy'
import { cn } from '../src/utils/cn'

interface CodeHighlightPreviewProps extends HTMLAttributes<HTMLDivElement> {
  code: {
    [key: string]: string
  }
  activeTab?: number
  wrapperClassName?: string
}

const CodeHighlightPreview = forwardRef<HTMLDivElement, CodeHighlightPreviewProps>(
  ({ children, code, className, activeTab, wrapperClassName }, ref) => {
    const [active, setActive] = useState(activeTab ?? 0)
    const { copy, copyToClipboard } = useCopy()

    return (
      <div className="my-10 space-y-5">
        <div className="flex items-center border-b border-b-metal-100 dark:border-b-metal-800">
          <button
            type="button"
            className="-mb-px border-b-metal-900 px-2.5 pb-2.5 text-body-4 font-medium data-[state=false]:border-b-0 data-[state=true]:border-b-2 data-[state=false]:text-metal-400 data-[state=true]:text-metal-900 dark:border-b-white dark:text-metal-300 dark:data-[state=false]:text-metal-300 dark:data-[state=true]:text-white "
            onClick={() => setActive(0)}
            data-state={active === 0}
            id="preview-btn">
            Preview
          </button>
          {Object.keys(code).map((key, index) => (
            <button
              className="-mb-px border-b-metal-900 px-2.5 pb-2.5 text-body-4 font-medium data-[state=false]:border-b-0 data-[state=true]:border-b-2 data-[state=false]:text-metal-400 data-[state=true]:text-metal-900 dark:border-b-white dark:text-metal-300 dark:data-[state=false]:text-metal-300 dark:data-[state=true]:text-white "
              data-state={active === index + 1}
              key={key}
              onClick={() => setActive(index + 1)}>
              <span>{key}</span>
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={cn(
            'relative max-w-full overflow-hidden rounded-xl border border-metal-100 dark:border-metal-800',
            className,
          )}>
          <button
            onClick={() => {
              copyToClipboard(Object.values(code)[active === 0 ? 0 : active - 1])
              toast.success('Code Copied!', {
                classNames: {
                  toast:
                    'dark:!bg-metal-900/30 dark:!text-white dark:!border-metal-800 !bg-white !text-metal-900 !border-metal-50',
                },
              })
            }}
            className="absolute right-7 top-6">
            {copy ? (
              <Check weight="light" className="size-6 text-white" />
            ) : (
              <Copy weight="light" className="size-6 text-white" />
            )}
          </button>

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
            <div
              className={cn(
                'flex h-full min-h-[420px] w-full items-center justify-center bg-white px-20 py-14 dark:bg-[#0D1015]',
                wrapperClassName,
              )}>
              <div className="mx-auto flex h-full w-full items-center justify-center overflow-auto">{children}</div>
            </div>
          )}
        </div>
      </div>
    )
  },
)

CodeHighlightPreview.displayName = 'CodeHighlightPreview'

export default CodeHighlightPreview
