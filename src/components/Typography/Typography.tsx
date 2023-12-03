'use client'
import { ReactNode, HTMLProps, createElement, FC, useLayoutEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { KeepTypography } from '../../Keep/KeepTheme'

interface TypographyProps extends HTMLProps<HTMLElement> {
  variant?: keyof JSX.IntrinsicElements | KeepTypography
  children?: ReactNode
  className?: string
}

const mapStringToElement = (variant: string): keyof JSX.IntrinsicElements | undefined => {
  if (variant.startsWith('heading')) {
    const headingNumber = parseInt(variant.substring('heading-'.length), 10)

    if (headingNumber >= 7) return 'h6'

    if (!isNaN(headingNumber) && headingNumber >= 1 && headingNumber <= 6) {
      return `h${headingNumber}` as keyof JSX.IntrinsicElements
    }
  }

  if (variant.startsWith('display')) {
    return 'h1'
  }

  if (variant.startsWith('body') || variant.startsWith('description')) {
    return 'p'
  }

  return undefined
}

export const Typography: FC<TypographyProps> = ({ variant, children, className, ...otherProps }) => {
  const [variantClass, setVariantClass] = useState('')
  const Element = variant || 'div'
  const mappedElementType = typeof variant === 'string' ? mapStringToElement(variant) : undefined
  const FinalElement = mappedElementType || Element

  useLayoutEffect(() => {
    if (
      variant?.startsWith('heading') ||
      variant?.startsWith('display') ||
      variant?.startsWith('body') ||
      variant?.startsWith('description')
    ) {
      setVariantClass(`text-${variant}`)
    }
  }, [variant])

  return createElement(FinalElement, { className: cn(variantClass, className), ...otherProps }, children)
}
