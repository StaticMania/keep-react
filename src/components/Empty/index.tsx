import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { Button } from '../Button/Button'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepEmptyTheme {
  base: string
  title: string
  content: string
}

export interface EmptyProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  title?: string
  content?: string
  redirectUrl?: string
  buttonText?: string
  image?: ReactNode
  titleStyle?: string
  contentStyle?: string
  redirectBtnSize?: 'xs' | 'sm' | 'md' | 'lg'
  buttonType?: 'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
}

export const Empty: FC<EmptyProps> = ({
  title,
  content,
  redirectUrl,
  image,
  buttonText,
  className,
  buttonType = 'primary',
  redirectBtnSize = 'sm',
  titleStyle,
  contentStyle,
}) => {
  const theme = useTheme().theme.empty

  return (
    <div className={cn(theme.base, className)}>
      {image}
      <h1 className={cn(theme.title, titleStyle)}>{title}</h1>
      <p className={cn(theme.content, contentStyle)}>{content}</p>

      {buttonText && (
        <Button href={redirectUrl} size={redirectBtnSize} type={buttonType}>
          {buttonText}
        </Button>
      )}
    </div>
  )
}

Empty.displayName = 'Empty'
