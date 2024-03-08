import { useState } from 'react'

const useCopy = () => {
  const [copy, setCopy] = useState<boolean>(false)
  if (copy) {
    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }
  const copyToClipboard = (text: string) => {
    navigator?.clipboard
      ?.writeText(text)
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
