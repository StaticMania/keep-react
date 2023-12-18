'use client'
import { FC, ReactNode } from 'react'
import { Button } from '../Button/Button'
import { cn } from '../../helpers/cn'

export interface RedirectProps {
  redirectUrl?: string
  redirectBtnSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  buttonType?: 'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
  buttonText?: string
  className?: string
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
      <Button href={redirectUrl} size={redirectBtnSize} type={buttonType} className={cn(className)}>
        {buttonText}
      </Button>
    )
  }

  return children
}
