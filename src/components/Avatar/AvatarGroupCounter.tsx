import type { PropsWithChildren } from 'react'
import type { AvatarSizes } from './Avatar'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type AvatarGroupCounterProps = PropsWithChildren<{
  total?: number
  href?: string
  size?: keyof AvatarSizes
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
