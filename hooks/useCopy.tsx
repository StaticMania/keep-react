import { useState } from 'react'

/**
 * A custom hook that provides a function to copy text to clipboard and a boolean state indicating whether the copy was successful or not.
 * @returns An object containing the copy state and the copyToClipboard function.
 */
const useCopy = () => {
  /**
   * A boolean state indicating whether the copy was successful or not.
   */
  const [copy, setCopy] = useState<Boolean>(false);

  /**
   * If copy is true, set it to false after 3 seconds.
   */
  if (copy) {
    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }

  /**
   * A function that copies the given text to clipboard.
   * @param text The text to be copied to clipboard.
   */
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopy(true)
      })
      .catch((error) => {
        console.error(error);
        setCopy(false);
      });
  };

  return {
    copy,
    copyToClipboard,
  }
}

export default useCopy
