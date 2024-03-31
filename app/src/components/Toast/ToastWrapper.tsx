'use client'
import { useTheme } from 'next-themes'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-metal-900 group-[.toaster]:border-metal-100 group-[.toaster]:shadow-large rounded-xl',
          description: 'group-[.toast]:text-metal-600 text-body-4 font-normal text-metal-600',
          actionButton: 'group-[.toast]:bg-metal-900 group-[.toast]:text-white',
          cancelButton: 'group-[.toast]:bg-metal-900 group-[.toast]:text-white',
          title: 'text-body-4 font-medium text-metal-900',
        },
      }}
      {...props}
    />
  )
}

export { ToastWrapper }
