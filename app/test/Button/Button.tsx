'use client'
import { FC, ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'dark'
  type?: 'submit' | 'reset' | 'button'
  width?: 'half' | 'full'
  borderType?: 'solid' | 'dashed' | 'dotted' | 'none'
  radius?: 'rounded' | 'circled' | 'square'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}
