import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ButtonVariant } from '~/app/src'
import { cn } from '~/app/src/helpers/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'error' | 'info' | 'success' | 'warning'
  type?: 'reset' | 'submit' | 'button'
  variant?: keyof ButtonVariant
  className?: string
}

const buttonThemes = {
  base: 'active:focus:scale-95 duration-150 rounded-md',
  color: {
    error: 'bg-error-500 text-white',
    info: 'bg-primary-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
  },
  size: {
    xs: 'text-body-5 px-3 py-2 text-body-5 font-medium',
    sm: 'text-body-5 px-4 py-2.5 text-body-5 font-medium',
    md: 'text-body-4 px-5 py-3 text-body-4 font-medium',
    lg: 'text-body-3 px-5 py-[14px] text-body-4 font-medium',
    xl: 'text-body-3 px-[22px] py-4 text-body-3 font-medium',
    '2xl': 'text-body-2 px-6 py-[18px] text-body-3 font-medium',
  },
}

const Button: FC<ButtonProps> = ({ children, className, size = 'md', color = 'info' }) => {
  return (
    <button className={cn(className, buttonThemes.base, buttonThemes.size[size], buttonThemes.color[color])}>
      {children}
    </button>
  )
}

export { Button }
