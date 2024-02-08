'use client'
import { FC, ReactElement, ReactNode, cloneElement } from 'react'
import { cn } from '../../helpers/cn'
import { useAlertContext } from './AlertContext'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { color } = useAlertContext()
  const iconStyles = cn(className)
  if (children) {
    return cloneElement(children as ReactElement, { className: iconStyles })
  } else if (color === 'error') {
    return (
      <svg
        className={cn(className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    )
  } else if (color === 'success') {
    return (
      <svg
        className={cn(className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    )
  } else {
    return (
      <svg
        className={cn(className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path>
      </svg>
    )
  }
}
