'use client'
import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { usePlayContext } from './PlayContext'
import { playTheme } from './theme'

export interface DismissProps {
  className?: string
  [key: string]: any
}

export const Dismiss: FC<DismissProps> = ({ className, ...props }) => {
  const { handleModal } = usePlayContext()
  return (
    <button {...props} onClick={handleModal} className={cn(playTheme.dismiss, className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 256">
        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </button>
  )
}
