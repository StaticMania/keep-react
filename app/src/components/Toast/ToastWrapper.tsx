'use client'
import { useTheme } from 'next-themes'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()
  return (
    <Sonner
      theme={theme as 'light' | 'dark' | 'system'}
      richColors
      {...props}
      toastOptions={{
        classNames: {
          title: 'text-body-3 font-medium',
          toast: 'rounded-xl shadow-large',
          description: 'text-body-4 font-normal',
        },
      }}
    />
  )
}

export { ToastWrapper }
