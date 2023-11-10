/**
 * Renders an avatar component with optional image, shape, size, and status.
 * @param {AvatarProps} props - The props object containing optional alt text, bordered, children, img, shape, size, stacked, status, statusType, statusPosition, and totalNotification.
 * @returns {JSX.Element} - The rendered Avatar component.
 * @see https://react.keepdesign.io/docs/components/avatar
 */

/* eslint-disable @next/next/no-img-element */
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { excludeClassName } from '../../helpers/exclude'
import { KeepPositions, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'
import { AvatarAdd } from './AvatarAdd'
import { AvatarGroup } from './AvatarGroup'
import { AvatarGroupCounter } from './AvatarGroupCounter'

/**
 * Interface for defining the theme of the Keep Avatar component.
 */
export interface keepAvatarTheme {
  /** The base color of the avatar. */
  base: string
  /** The color of the border around the avatar. */
  bordered: string
  /** The URLs for the off and on states of the avatar image. */
  img: {
    off: string
    on: string
  }
  /** The size of the avatar. */
  size: AvatarSizes
  /** The size of the custom status icon. */
  customStatusIcon: AvatarSizes
  /** The shape of the avatar. */
  shape: {
    square: string
    circle: string
    rounded: AvatarSizes
  }
  /** The style for stacked avatars. */
  stacked: string
  /** The colors for different status types. */
  status: {
    away: string
    busy: string
    offline: string
    online: string
  }
  /** The type, size, and font size of the avatar status. */
  statusType: {
    type: AvatarStatusType
    size: KeepAvatarStatusTypeSize
    fontSize: KeepAvatarStatusFontSize
  }
  /** The position of the avatar status for different avatar shapes. */
  statusPosition: {
    square: KeepAvatarStatusPositions
    circle: KeepAvatarStatusPositions
    rounded: KeepAvatarStatusPositions
  }
  /** The base color for the group counter. */
  groupCounter: {
    base: string
  }
  /** The base color and icon size for the add avatar button. */
  add: {
    base: string
    iconSize: AvatarSizes
  }
}

/**
 * Defines the sizes for the Avatar component.
 * @remarks
 * The Avatar component can be rendered in different sizes depending on the use case.
 * These sizes are defined by the `AvatarSize` enum.
 */
export interface AvatarSizes extends Pick<KeepSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> {
  [key: string]: string
}

/**
 * Represents the status of an avatar, including a dot and notification.
 * Additional properties can be added using string keys.
 *
 * @remarks
 * This component is used to display the status of an avatar, such as online or offline status.
 * It includes a dot and notification to indicate the status, and can be customized with additional properties.
 */
export interface AvatarStatusType extends Pick<KeepAvatarStatusType, 'dot' | 'notification'> {
  [key: string]: string
}

/**
 * Interface for defining the position of the status icon in an avatar component.
 * The position can be one of the following: 
 * @type {('bottom-left' | 'bottom-right' | 'top-left' | 'top-right')}
 * Additional custom positions can also be defined using a string key and a string value.
 */
export interface AvatarStatusPositions
  extends Pick<KeepPositions, 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'> {
  [key: string]: string
}

/**
 * Represents the status of a Keep avatar, including a dot and notification.
 */
export interface KeepAvatarStatusType {
  dot: string
  notification: string
}

/**
 * Defines the size of the dot and notification avatars for a KeepAvatarStatusType.
 */
export interface KeepAvatarStatusTypeSize {
  dot: AvatarSizes // The size of the dot avatar.
  notification: AvatarSizes // The size of the notification avatar.
}

/**
 * Defines the positions of the status indicator for different sizes of the Avatar component.
 * 
 * @remarks
 * The `StatusPositions` interface is used to specify the position of the status indicator for each size of the Avatar component.
 * 
 * @public
 */
export interface StatusPositions {
  xs: AvatarStatusPositions
  sm: AvatarStatusPositions
  md: AvatarStatusPositions
  lg: AvatarStatusPositions
  xl: AvatarStatusPositions
  '2xl': AvatarStatusPositions
}

/**
 * Interface for defining the positions of the status indicators on the KeepAvatar component.
 * @remarks
 * The `KeepAvatarStatusPositions` interface is used to specify the position of the status indicator for each size of the Avatar component.
 *  
 * @public
 */
export interface KeepAvatarStatusPositions {
  dot: StatusPositions
  notification: StatusPositions
}

/**
 * Defines the font size of the notification avatar for a KeepAvatarStatusType.
 */
export interface KeepAvatarStatusFontSize {
  notification: AvatarSizes
}

/**
 * Props for the Avatar component
 * @interface AvatarProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface AvatarProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Alternative text for the avatar image
   * @type {string}
   * @memberof AvatarProps
   */
  alt?: string
  /**
   * Whether to show a border around the avatar
   * @type {boolean}
   * @memberof AvatarProps
   */
  bordered?: boolean
  /**
   * URL of the image to display as the avatar
   * @type {string}
   * @memberof AvatarProps
   */
  img?: string
  /**
   * Size of the avatar
   * @type {keyof AvatarSizes}
   * @memberof AvatarProps
   */
  size?: keyof AvatarSizes
  /**
   * Shape of the avatar
   * @type {('circle' | 'rounded' | 'square')}
   * @memberof AvatarProps
   */
  shape?: 'circle' | 'rounded' | 'square'
  /**
   * Whether to stack the avatar on top of other avatars
   * @type {boolean}
   * @memberof AvatarProps
   */
  stacked?: boolean
  /**
   * Status of the user associated with the avatar
   * @type {('away' | 'busy' | 'offline' | 'online')}
   * @memberof AvatarProps
   */
  status?: 'away' | 'busy' | 'offline' | 'online'
  /**
   * Type of status icon to display
   * @type {keyof KeepAvatarStatusType}
   * @memberof AvatarProps
   */
  statusType?: keyof KeepAvatarStatusType
  /**
   * Position of the status icon
   * @type {keyof KeepPositions}
   * @memberof AvatarProps
   */
  statusPosition?: keyof KeepPositions
  /**
   * Number of notifications to display on the avatar
   * @type {number}
   * @memberof AvatarProps
   */
  totalNotification?: number
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
  ...props
}) => {
  const theirProps = excludeClassName(props)
  const theme = useTheme().theme.avatar

  return (
    <div data-testid="avatar-element" {...theirProps}>
      <div className="relative">
        {img ? (
          <img
            alt={alt}
            className={twMerge(
              shape === 'rounded' ? theme.shape.rounded[size] : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              theme.img.on,
              theme.size[size],
            )}
            data-testid="keep-avatar-img"
            src={img}
          />
        ) : (
          <div
            className={twMerge(
              shape === 'rounded' ? theme.shape.rounded[size] : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              theme.img.off,
              theme.size[size],
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
            className={twMerge(
              theme.status[status],
              theme.statusType.type[statusType],
              theme.statusType.size[statusType][size],
              theme.statusPosition[shape][statusType][size as keyof StatusPositions][statusPosition],
              statusType === 'notification' && theme.statusType.fontSize.notification[size],
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
