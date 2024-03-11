/* eslint-disable no-undef */
'use client'
import { createElement, FC, HTMLProps, ReactNode } from 'react'

import { cn } from '../../helpers/cn'
import { KeepTypography } from '../../Keep/KeepTheme'

/**
 * Props for the Typography component.
 * @interface TypographyProps
 * @extends {HTMLProps<HTMLElement>}
 */
interface TypographyProps extends HTMLProps<HTMLElement> {
  /**
   * The variant of the Typography.
   * @type {keyof JSX.IntrinsicElements | KeepTypography}
   * @default 'div'
   */
  variant?: keyof JSX.IntrinsicElements | KeepTypography
  /**
   * The content of the Typography.
   * @type {ReactNode}
   */
  children?: ReactNode
  /**
   * The class name of the Typography.
   * @type {string}
   * @default ''
   */
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

  if (variant.startsWith('body')) {
    return 'p'
  }

  return undefined
}

export const Typography: FC<TypographyProps> = ({ variant = 'div', children, className, ...otherProps }) => {
  const Element = variant || 'div'
  const mappedElementType = typeof variant === 'string' ? mapStringToElement(variant) : undefined
  const FinalElement = mappedElementType || Element

  switch (true) {
    case variant?.startsWith('heading'): {
      const heading = +variant?.split('-')[1]
      return createElement(
        FinalElement,
        {
          className: cn(heading > 6 ? `heading-6` : variant, className),
          ...otherProps,
        },
        children,
      )
    }
    case variant?.startsWith('display'): {
      return createElement(
        FinalElement,
        {
          className: cn(`display`, className),
          ...otherProps,
        },
        children,
      )
    }
    case variant?.startsWith('body'): {
      const body = +variant?.split('-')[1]
      return createElement(
        FinalElement,
        {
          className: cn(body > 5 ? `body-5` : variant, className),
          ...otherProps,
        },
        children,
      )
    }

    default:
      return createElement(
        FinalElement,
        {
          className: cn(className),
          ...otherProps,
        },
        children,
      )
  }
}
