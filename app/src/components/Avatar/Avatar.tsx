/**
 * Renders an avatar component with optional image, shape, size, and status.
 * @param {AvatarProps} props - The props object containing optional alt text, bordered, children, img, shape, size, stacked, status, statusType, statusPosition, and totalNotification.
 * @returns {ReactElement} - The rendered Avatar component.
 * @see https://react.keepdesign.io/docs/components/avatar
 */

import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { AvatarAdd } from './AvatarAdd'
import { AvatarGroup } from './AvatarGroup'
import { AvatarGroupCounter } from './AvatarGroupCounter'
import { cn } from '../../helpers/cn'
import { AvatarSizes, KeepAvatarStatusType, StatusPositions, avatarTheme } from './theme'
import { KeepPositions } from '../../Keep/KeepTheme'

/**
 * Props for the Avatar component
 * @interface AvatarProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface AvatarProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Alternative text for the avatar image
   * @type string
   * @default ''
   */
  alt?: string

  /**
   * Whether to show a border around the avatar
   * @type boolean
   * @default false
   */
  bordered?: boolean

  /**
   * URL of the image to display as the avatar
   * @type string
   */
  img?: string

  /**
   * Size of the avatar
   * @type keyof AvatarSizes
   * @default 'md'
   */
  size?: keyof AvatarSizes

  /**
   * Shape of the avatar
   * @type ('circle' | 'rounded' | 'square')
   * @default 'square'
   */
  shape?: 'circle' | 'rounded' | 'square'

  /**
   * Whether to stack the avatar on top of other avatars
   * @type boolean
   * @default false
   */
  stacked?: boolean

  /**
   * Status of the user associated with the avatar
   * @type ('away' | 'busy' | 'offline' | 'online')
   */
  status?: 'away' | 'busy' | 'offline' | 'online'

  /**
   * Type of status icon to display
   * @type keyof KeepAvatarStatusType
   * @default 'dot'
   */
  statusType?: keyof KeepAvatarStatusType

  /**
   * Position of the status icon
   * @type keyof KeepPositions
   * @default 'top-left'
   */
  statusPosition?: keyof KeepPositions

  /**
   * Number of notifications to display on the avatar
   * @type number
   */
  totalNotification?: number

  /**
   * className to apply to the Avatar.
   * @type string
   */
  className?: string

  /**
   * style to apply to the Avatar status.
   * @type string
   */
  statusStyle?: string
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  img,
  shape = 'square',
  size = 'md',
  stacked = false,
  status,
  statusType = 'dot',
  statusPosition = 'top-left',
  totalNotification = 99,
  className,
  statusStyle,
  ...props
}) => {
  const theirProps = excludeClassName(props)
  const theme = avatarTheme

  return (
    <div data-testid="avatar-element" {...theirProps}>
      <div className="relative">
        {img ? (
          <img
            alt={alt}
            className={cn(
              shape === 'rounded' ? theme.shape.rounded[size] : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              theme.img.on,
              theme.size[size],
              className,
            )}
            data-testid="keep-avatar-img"
            src={img}
          />
        ) : (
          <div
            className={cn(
              shape === 'rounded' ? theme.shape.rounded[size] : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              theme.img.off,
              theme.size[size],
              className,
            )}
            data-testid="keep-avatar-img">
            <svg
              className="absolute h-auto w-auto"
              fill="none"
              viewBox="-10 -10 70 70"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.81 40.498a21.007 21.007 0 0 1 36.38 0"
                stroke="#8897AE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 30c6.627 0 12-5.373 12-12S30.627 6 24 6s-12 5.373-12 12 5.373 12 12 12Z"
                stroke="#8897AE"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        )}
        {status && (
          <span
            className={cn(
              theme.status[status],
              theme.statusType.type[statusType],
              theme.statusType.size[statusType][size],
              theme.statusPosition[shape][statusType][size as keyof StatusPositions][statusPosition],
              statusType === 'notification' && theme.statusType.fontSize.notification[size],
              statusStyle,
            )}>
            {statusType === 'notification' && `${totalNotification}`}
          </span>
        )}
      </div>
      {children && <div className="text-center">{children}</div>}
    </div>
  )
}

AvatarComponent.displayName = 'Avatar'

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
  Add: AvatarAdd,
})
