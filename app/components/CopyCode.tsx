'use client'
import { Check, Clipboard } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import useCopy from '../../hooks/useCopy'
import { Skeleton } from '../src'

const CopyCode = ({ code }: { code: string }) => {
  const { copy, copyToClipboard } = useCopy()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setIsClient(true)
    }
    return () => {
      ignore = true
    }
  }, [])
  return (
    <div className="relative my-5">
      {isClient ? (
        <SyntaxHighlighter
          language="javascript"
          style={coldarkDark}
          customStyle={{
            borderRadius: '8px',
            backgroundColor: '#1C222B',
          }}>
          {code.trim()}
        </SyntaxHighlighter>
      ) : (
        <Skeleton animation={true}>
          <Skeleton.Line className="h-[60px]" />
        </Skeleton>
      )}
      <button onClick={() => copyToClipboard(code)} className="absolute right-5 top-5 cursor-pointer">
        {copy ? <Check size={20} weight="light" color="#fff" /> : <Clipboard size={20} weight="light" color="#fff" />}
      </button>
    </div>
  )
}

export default CopyCode
