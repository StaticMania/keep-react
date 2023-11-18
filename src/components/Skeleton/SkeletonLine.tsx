import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface SkeletonProps {
  height?: string
  className?: string
}

export const SkeletonLine: FC<SkeletonProps> = ({ height, className }) => {
  const theme = useTheme().theme.skeleton
  return <div className={cn(theme.line, height, className)}></div>
}
