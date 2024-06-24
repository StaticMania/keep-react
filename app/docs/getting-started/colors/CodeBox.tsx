'use client'
import { Check, Copy } from 'phosphor-react'
import { FC } from 'react'
import { cn } from '~/app/src/helpers/cn'
import useCopy from '~/hooks/useCopy'

interface CodeBoxProps {
  color: string
  id: number
  code: string
}

const CodeBox: FC<CodeBoxProps> = ({ color, id, code }) => {
  const { copy, copyToClipboard } = useCopy()
  return (
    <div>
      <button
        onClick={() => copyToClipboard(code)}
        className={cn('group flex h-10 w-16 border-spacing-2 items-center justify-center rounded-lg', color)}>
        <span
          className={cn(
            'opacity-0 transition-all duration-300 group-hover:opacity-100',
            id > 300 ? 'text-metal-100' : 'text-metal-900',
          )}>
          {copy ? <Check size={18} /> : <Copy size={18} />}
        </span>
      </button>
      <div className="mt-1 text-left">
        <p className="text-[10px] font-medium text-metal-600 dark:text-metal-300">{id}</p>
        <p className="text-[10px] font-medium text-metal-600 dark:text-metal-300">{code}</p>
      </div>
    </div>
  )
}

export default CodeBox
