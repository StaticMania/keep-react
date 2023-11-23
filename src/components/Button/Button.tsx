import { ComponentProps, forwardRef, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepBoolean, KeepButtonType, KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { PositionInButtonGroup } from './ButtonGroup'
import { ButtonGroup } from './ButtonGroup'
import { cn } from '../../helpers/cn'

export interface keepButtonTheme {
  base: string
  disabled: string
  width: {
    half: string
    full: string
  }
  inner: {
    base: string
    position: PositionInButtonGroup
  }
  notificationLabel: string
  default: {
    color: ButtonColors
    transition: KeepBoolean
  }
  primary: {
    color: ButtonColors
    transition: KeepBoolean
  }
  outlineGray: {
    color: ButtonColors
    transition: KeepBoolean
  }
  outlinePrimary: {
    color: ButtonColors
    transition: KeepBoolean
  }
  dashed: {
    color: ButtonColors
    transition: KeepBoolean
  }
  text: {
    color: ButtonColors
    transition: KeepBoolean
  }
  linkPrimary: {
    color: ButtonColors
    transition: KeepBoolean
  }
  linkGray: {
    color: ButtonColors
    transition: KeepBoolean
  }
  pill: KeepBoolean
  circle: {
    off: string
    size: ButtonSizes
  }
  size: ButtonSizes
}

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color' | 'type'> {
  href?: string
  color?: keyof ButtonColors
  type?: 'button' | 'submit' | 'reset'
  buttonType?: keyof ButtonTypes
  notificationLabel?: string
  notificationLabelStyle?: string
  pill?: boolean
  circle?: boolean
  positionInGroup?: keyof PositionInButtonGroup
  children?: ReactNode
  size?: keyof ButtonSizes
  width?: 'full' | 'half'
  className?: string
  onClick?: () => void
}

export interface ButtonTypes
  extends Pick<
    KeepButtonType,
    'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
  > {
  [key: string]: string
}

export interface ButtonColors extends Pick<KeepColors, 'error' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}
export interface ButtonSizes extends Pick<KeepSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> {
  [key: string]: string
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      color = 'info',
      disabled = false,
      type = 'button',
      buttonType = 'default',
      href,
      notificationLabel,
      pill = false,
      circle = false,
      positionInGroup = 'none',
      size = 'md',
      width,
      className,
      notificationLabelStyle,
      ...props
    },
    ref,
  ) => {
    const isLink = typeof href !== 'undefined'
    const theirProps = excludeClassName(props)
    const { buttonGroup: groupTheme, button: theme } = useTheme().theme
    const Component = isLink ? 'a' : 'button'
    return (
      <Component
        className={cn(
          theme.base,
          disabled && theme.disabled,
          width && theme.width[width],
          groupTheme.position[positionInGroup],
          !circle && theme.pill[pill ? 'on' : 'off'],
          circle && theme.circle.size[size],
          buttonType === 'default' && theme.default.color[color],
          buttonType === 'primary' && theme.primary.color[color],
          buttonType === 'outlineGray' && theme.outlineGray.color[color],
          buttonType === 'outlinePrimary' && theme.outlinePrimary.color[color],
          buttonType === 'dashed' && theme.dashed.color[color],
          buttonType === 'text' && theme.text.color[color],
          buttonType === 'linkPrimary' && theme.linkPrimary.color[color],
          buttonType === 'linkGray' && theme.linkGray.color[color],
          className,
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : type}
        onClick={onClick}
        {...theirProps}>
        <span
          ref={ref}
          className={cn(
            theme.inner.base,
            !circle && theme.size[size],
            theme.inner.position[positionInGroup],
            theme.default.transition[buttonType === 'default' ? 'on' : 'off'],
            theme.primary.transition[buttonType === 'primary' ? 'on' : 'off'],
            theme.outlineGray.transition[buttonType === 'outlineGray' ? 'on' : 'off'],
            theme.outlinePrimary.transition[buttonType === 'outlinePrimary' ? 'on' : 'off'],
            theme.dashed.transition[buttonType === 'dashed' ? 'on' : 'off'],
            theme.text.transition[buttonType === 'text' ? 'on' : 'off'],
            theme.linkPrimary.transition[buttonType === 'linkPrimary' ? 'on' : 'off'],
            theme.linkGray.transition[buttonType === 'linkGray' ? 'on' : 'off'],
          )}>
          <>
            {typeof children !== 'undefined' && children}
            {typeof notificationLabel !== 'undefined' && (
              <span className={cn(theme.notificationLabel, notificationLabelStyle)} data-testid="keep-button-label">
                {notificationLabel}
              </span>
            )}
          </>
        </span>
      </Component>
    )
  },
)

ButtonComponent.displayName = 'Button'
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
