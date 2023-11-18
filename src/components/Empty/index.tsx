import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { Button } from '../Button/Button'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme for the Empty component.
 */
export interface keepEmptyTheme {
  base: string
  title: string
  content: string
}

/**
 * Props for the Empty component.
 */
export interface EmptyProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  /**
   * The title of the empty component.
   */
  title?: string
  /**
   * The content of the empty component.
   */
  content?: string
  /**
   * The URL to redirect to when the button is clicked.
   */
  redirectUrl?: string
  /**
   * The text to display on the button.
   */
  buttonText?: string
  /**
   * The image to display in the empty component.
   */
  image?: ReactNode
  /**
   * The style of the title.
   */
  titleStyle?: string
  /**
   * The style of the content.
   */
  contentStyle?: string
  /**
   * The size of the redirect button.
   */
  redirectBtnSize?: 'xs' | 'sm' | 'md' | 'lg'
  /**
   * The type of the button.
   */
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
