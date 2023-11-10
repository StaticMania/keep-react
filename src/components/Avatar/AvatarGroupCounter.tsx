/**
 * @packageDocumentation
 * @module Avatar
 * 
 * @remarks
 * The `AvatarGroupCounter` component is used to display a counter for the number of users represented by an `AvatarGroup` component.
 * 
 * The Avatar Group Counter component displays a limited set of avatar images while representing the remaining users numerically with a label like "+99" or a similar indicator. 
 * 
 * @see https://react.keepdesign.io/docs/components/avatargroup#avatar-group-with-counter
 */
import { twMerge } from 'tailwind-merge'
import type { PropsWithChildren } from 'react'
import type { AvatarSizes } from './Avatar'
import { useTheme } from '../../Keep/ThemeContex'

/**
 * @param total - The total number of users represented by the counter.
 * @param href - The URL to link to when the counter is clicked.
 * @param size - The size of the Avatar Group Counter component. Default is 'md'.
 */

export type AvatarGroupdCounterProps = PropsWithChildren<{
  total?: number
  href: string
  size?: keyof AvatarSizes
}>

export const AvatarGroupCounter: React.FC<AvatarGroupdCounterProps> = ({ total, href, size = 'md' }) => {
  const theme = useTheme().theme.avatar
  return (
    <a
      className={twMerge(theme.size[size], theme.groupCounter.base, theme.statusType.fontSize.notification[size])}
      href={href}>
      +{total}
    </a>
  )
}

AvatarGroupCounter.displayName = 'Avatar.GroupCounter'
