import { ComponentProps, forwardRef, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepBoolean, KeepButtonType, KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { PositionInButtonGroup } from './ButtonGroup'
import { ButtonGroup } from './ButtonGroup'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme configuration for the Keep button.
 */
export interface keepButtonTheme {
  /**
   * The base color of the button.
   */
  base: string
  /**
   * The disabled state color of the button.
   */
  disabled: string
  /**
   * The width options for the button.
   */
  width: {
    /**
     * The half-width size of the button.
     */
    half: string
    /**
     * The full-width size of the button.
     */
    full: string
  }
  /**
   * The inner configuration of the button.
   */
  inner: {
    /**
     * The base style of the inner content of the button.
     */
    base: string
    /**
     * The position of the inner content in a button group.
     */
    position: PositionInButtonGroup
  }
  /**
   * The label color for notification buttons.
   */
  notificationLabel: string
  /**
   * The default button style configuration.
   */
  default: {
    /**
     * The color of the default button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the default button.
     */
    transition: KeepBoolean
  }
  /**
   * The primary button style configuration.
   */
  primary: {
    /**
     * The color of the primary button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the primary button.
     */
    transition: KeepBoolean
  }
  /**
   * The outline gray button style configuration.
   */
  outlineGray: {
    /**
     * The color of the outline gray button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the outline gray button.
     */
    transition: KeepBoolean
  }
  /**
   * The outline primary button style configuration.
   */
  outlinePrimary: {
    /**
     * The color of the outline primary button.
     */
    color: ButtonColors

    /**
     * The transition configuration for the outline primary button.
     */
    transition: KeepBoolean
  }
  /**
   * The dashed button style configuration.
   */
  dashed: {
    /**
     * The color of the dashed button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the dashed button.
     */
    transition: KeepBoolean
  }
  /**
   * The text button style configuration.
   */
  text: {
    /**
     * The color of the text button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the text button.
     */
    transition: KeepBoolean
  }
  /**
   * The primary link button style configuration.
   */
  linkPrimary: {
    /**
     * The color of the primary link button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the primary link button.
     */
    transition: KeepBoolean
  }
  /**
   * The gray link button style configuration.
   */
  linkGray: {
    /**
     * The color of the gray link button.
     */
    color: ButtonColors
    /**
     * The transition configuration for the gray link button.
     */
    transition: KeepBoolean
  }
  /**
   * The boolean value indicating whether the button has a pill shape.
   */
  pill: KeepBoolean
  /**
   * The configuration for the circle-shaped button.
   */
  circle: {
    /**
     * The off state color of the circle button.
     */
    off: string
    /**
     * The size options for the circle button.
     */
    size: ButtonSizes
  }
  /**
   * The size options for the button.
   */
  size: ButtonSizes
}

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color' | 'type'> {
  href?: string
  color?: keyof ButtonColors
  type?: keyof ButtonTypes
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

/**
 * Represents the types of buttons available.
 * Extends the `KeepButtonType` interface and adds additional button types.
 * @interface ButtonTypes
 * @extends KeepButtonType
 * @default 'default' - The default button type.
 * @default 'primary' - The primary button type.
 * @default 'outlineGray' - The outline gray button type.
 * @default 'outlinePrimary' - The outline primary button type.
 * @default 'dashed' - The dashed button type.
 * @default 'text' - The text button type.
 * @default 'linkPrimary' - The link primary button type.
 * @default 'linkGray' - The link gray button type.
 */
export interface ButtonTypes
  extends Pick<
    KeepButtonType,
    'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
  > {
  [key: string]: string
}

/**
 * Interface for defining button colors.
 * Extends the `KeepColors` interface and adds additional color properties.
 */
export interface ButtonColors extends Pick<KeepColors, 'error' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}
/**
 * Interface for defining button sizes.
 * @interface ButtonSizes
 * @extends KeepSizes
 * extra small | small | medium | large | extra large | 2 extra large
 */
export interface ButtonSizes extends Pick<KeepSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> {
  [key: string]: string
}

/**
 * A customizable button component that can be used in React applications.
 * @param children The content to be displayed inside the button.
 * @param onClick The function to be called when the button is clicked.
 * @param color The color of the button. Defaults to 'info'.
 * @param disabled Whether the button is disabled. Defaults to false.
 * @param type The type of the button. Defaults to 'default'.
 * @param href The URL to link to if the button is a link.
 * @param notificationLabel The label to display on the button for notifications.
 * @param pill Whether the button should be pill-shaped. Defaults to false.
 * @param circle Whether the button should be circular. Defaults to false.
 * @param positionInGroup The position of the button in a group. Defaults to 'none'.
 * @param size The size of the button. Defaults to 'md'.
 * @param width The width of the button.
 * @param customClass Custom CSS classes to apply to the button.
 */
const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      color = 'info',
      disabled = false,
      type = 'default',
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
          type === 'default' && theme.default.color[color],
          type === 'primary' && theme.primary.color[color],
          type === 'outlineGray' && theme.outlineGray.color[color],
          type === 'outlinePrimary' && theme.outlinePrimary.color[color],
          type === 'dashed' && theme.dashed.color[color],
          type === 'text' && theme.text.color[color],
          type === 'linkPrimary' && theme.linkPrimary.color[color],
          type === 'linkGray' && theme.linkGray.color[color],
          className,
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : 'button'}
        onClick={onClick}
        {...theirProps}>
        <span
          ref={ref}
          className={cn(
            theme.inner.base,
            !circle && theme.size[size],
            theme.inner.position[positionInGroup],
            theme.default.transition[type === 'default' ? 'on' : 'off'],
            theme.primary.transition[type === 'primary' ? 'on' : 'off'],
            theme.outlineGray.transition[type === 'outlineGray' ? 'on' : 'off'],
            theme.outlinePrimary.transition[type === 'outlinePrimary' ? 'on' : 'off'],
            theme.dashed.transition[type === 'dashed' ? 'on' : 'off'],
            theme.text.transition[type === 'text' ? 'on' : 'off'],
            theme.linkPrimary.transition[type === 'linkPrimary' ? 'on' : 'off'],
            theme.linkGray.transition[type === 'linkGray' ? 'on' : 'off'],
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
