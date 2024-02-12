'use client'
import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { skeletonTheme } from './theme'

export interface SkeletonLineProps {
  height?: string
  className?: string
}

export const SkeletonLine: FC<SkeletonLineProps> = ({ height, className }) => {
  const theme = skeletonTheme
  return <div className={cn(theme.line, height, className)}></div>
}
