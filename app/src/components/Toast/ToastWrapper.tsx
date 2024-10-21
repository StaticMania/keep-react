'use client'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ theme = 'system', ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
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
