import type { FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { AvatarSizes, avatarTheme } from './theme'

/**
 * Props for the AvatarGroupCounter component.
 * @type {AvatarGroupCounterProps}
 */
export type AvatarGroupCounterProps = PropsWithChildren<{
  /**
   * The total number to be displayed.
   * @type {number}
   * @default 0
   */
  total?: number

  /**
   * The URL to navigate to when the component is clicked.
   * @type {string}
   * @default ''
   */
  href?: string

  /**
   * The size of the avatar.
   * @type {keyof AvatarSizes}
   * @default 'md'
   */
  size?: keyof AvatarSizes

  /**
   * Additional CSS class names for the component.
   * @type {string}
   * @default ''
   */
  className?: string
}>

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({ total, href, size = 'md', className }) => {
  const theme = avatarTheme
  return (
    <a
      className={cn(theme.size[size], theme.groupCounter.base, theme.statusType.fontSize.notification[size], className)}
      href={href}>
      +{total}
    </a>
  )
}

AvatarGroupCounter.displayName = 'Avatar.GroupCounter'
