'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { playTheme } from './theme'

export interface FrameProps {
  children?: ReactNode
  className?: string
  src?: string
  [key: string]: any
}

export const Frame: FC<FrameProps> = ({ className, children, src, ...props }) => {
  return (
    <div {...props} className={cn(playTheme.frame, className)}>
      {children ? (
        children
      ) : (
        <iframe
          className="h-full w-full"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      )}
    </div>
  )
}
