'use client'
import { useTheme } from 'next-themes'
import { ToastWrapper } from '../src'

const ToastTheme = () => {
  const { theme } = useTheme()
  return <ToastWrapper theme={theme as 'light' | 'dark' | 'system'} />
}

export default ToastTheme
