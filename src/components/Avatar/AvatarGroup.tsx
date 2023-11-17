import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode
  className?: string
}>

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className }) => {
  return (
    <div data-testid="avatar-group-element" className={cn('flex items-center -space-x-2', className)}>
      {children}
    </div>
  )
}

AvatarGroup.displayName = 'Avatar.Group'
