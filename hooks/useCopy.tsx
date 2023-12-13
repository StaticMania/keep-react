import { useState } from 'react'

/**
 * A custom hook to copy text to clipboard and set a flag for 3 seconds.
 * @returns An object containing a boolean flag indicating if the text has been copied and a function to copy text to clipboard.
 * 
 * @example
 * ```tsx
 * import useCopy from './hooks/useCopy'
 * 
 *  const { copy, copyToClipboard } = useCopy()
 * 
 * <button onClick={() => copyToClipboard('Hello World')}>
 * Copy to clipboard
 * </button>
 * {copy && <p>Text copied to clipboard</p>}
 * 
 * ```
 * 
 */
const useCopy = () => {
  const [copy, setCopy] = useState<Boolean>(false)
  if (copy) {
    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopy(true)
      })
      .catch((error) => {
        console.error(error)
        setCopy(false)
      })
  }
  return {
    copy,
    copyToClipboard,
  }
}

export default useCopy
