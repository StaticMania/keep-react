'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { playTheme } from './theme'

export interface FrameProps {
  children?: ReactNode
  className?: string
  title?: string
  src?: string
  [key: string]: any
}

export const Frame: FC<FrameProps> = ({ className, children, src, title, ...props }) => {
  return (
    <div {...props} className={cn(playTheme.frame, className)}>
      {children ?? (
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      )}
    </div>
  )
}
