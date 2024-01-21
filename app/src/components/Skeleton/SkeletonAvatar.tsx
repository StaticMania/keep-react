import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { skeletonTheme } from './theme'

export const SkeletonAvatar: FC<{ className?: string }> = ({ className }) => {
  const theme = skeletonTheme
  return <div className={cn(theme.avatar, className)}></div>
}
