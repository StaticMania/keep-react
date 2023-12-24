import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export const SkeletonAvatar: FC<{ className?: string }> = ({ className }) => {
  const theme = useTheme().theme.skeleton
  return <div className={cn(theme.avatar, className)}></div>
}
