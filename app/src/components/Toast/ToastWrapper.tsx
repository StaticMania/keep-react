'use client'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ theme = 'system', toastOptions, richColors = true, ...props }: ToasterProps) => {
  const classNames: ToasterProps['toastOptions'] = {
    classNames: {
      title: 'text-body-3 font-medium',
      toast: 'rounded-xl shadow-large',
      description: 'text-body-4 font-normal',
    },
  }
  return <Sonner theme={theme} richColors={richColors} {...props} toastOptions={toastOptions ?? classNames} />
}

export { ToastWrapper }
