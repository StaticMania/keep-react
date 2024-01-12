'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface RedirectProps {
  /**
   * The URL to redirect to.
   * @type {string}
   * @default ''
   */
  redirectUrl?: string

  /**
   * The text to display on the redirect button.
   * @type {string}
   * @default ''
   */
  buttonText?: string
  /**
   * Additional CSS class for the component.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * The child elements of the component.
   * @type {ReactNode}
   */
  children?: ReactNode
}

export const Redirect: FC<RedirectProps> = ({ redirectUrl, buttonText, className, children }) => {
  const { redirectBtn } = useTheme().theme.empty
  if (!children) {
    return (
      <a href={redirectUrl} className={cn(redirectBtn, className)}>
        {buttonText}
      </a>
    )
  }

  return children
}
