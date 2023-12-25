'use client'
import { FC, ReactNode } from 'react'

import { Button } from '../Button/Button'

import { cn } from '../../helpers/cn'

/**
 * Props for the Redirect component.
 * @interface RedirectProps
 *
 */
export interface RedirectProps {
  /**
   * The URL to redirect to.
   * @type {string}
   * @default ''
   */
  redirectUrl?: string
  /**
   * The size of the redirect button.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
   * @default 'md'
   */
  redirectBtnSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * The type of the redirect button.
   * @type {'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'}
   * @default 'primary'
   */
  buttonType?: 'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
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

export const Redirect: FC<RedirectProps> = ({
  redirectUrl,
  redirectBtnSize = 'md',
  buttonType = 'primary',
  buttonText,
  className,
  children,
}) => {
  if (!children) {
    return (
      <Button href={redirectUrl} size={redirectBtnSize} variant={buttonType} className={cn(className)}>
        {buttonText}
      </Button>
    )
  }

  return children
}
