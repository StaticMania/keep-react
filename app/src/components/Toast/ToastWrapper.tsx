'use client'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'
import { keepTw } from '../../utils/keepTw'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: keepTw({
          toast:
            'group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-metal-900 group-[.toaster]:text-metal-900 group-[.toaster]:border-metal-100 dark:group-[.toaster]:border-metal-800 group-[.toaster]:shadow-large rounded-xl',
          description:
            'group-[.toast]:text-metal-600 text-body-4 font-normal text-metal-600 dark:text-metal-600 dark:group-[.toast]:text-metal-300',
          actionButton:
            'group-[.toast]:bg-metal-900 dark:group-[.toast]:bg-metal-800 group-[.toast]:text-white dark:group-[.toast]:text-white',
          cancelButton: 'group-[.toast]:bg-metal-900 group-[.toast]:text-white',
          title: 'text-body-4 font-medium',
          error: '!text-error-500',
          info: '!text-primary-500',
          success: '!text-success-500',
          warning: '!text-warning-500',
        }),
      }}
      {...props}
    />
  )
}

export { ToastWrapper }
