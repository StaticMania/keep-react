import type { PropsWithChildren } from 'react'
import type { AvatarSizes } from './Avatar'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the AvatarGroupCounter component.
 */
export type AvatarGroupCounterProps = PropsWithChildren<{
  /**
   * The total number to be displayed.
   */
  total?: number

  /**
   * The URL to navigate to when the component is clicked.
   */
  href?: string

  /**
   * The size of the avatar.
   */
  size?: keyof AvatarSizes

  /**
   * Additional CSS class names for the component.
   */
  className?: string
}>

export const AvatarGroupCounter: React.FC<AvatarGroupCounterProps> = ({ total, href, size = 'md', className }) => {
  const theme = useTheme().theme.avatar
  return (
    <a
      className={cn(theme.size[size], theme.groupCounter.base, theme.statusType.fontSize.notification[size], className)}
      href={href}>
      +{total}
    </a>
  )
}

AvatarGroupCounter.displayName = 'Avatar.GroupCounter'
