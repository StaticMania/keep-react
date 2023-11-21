import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the AvatarGroup component.
 */
export type AvatarGroupProps = PropsWithChildren<{
  /**
   * The children of the AvatarGroup component.
   */
  children: ReactNode
  /**
   * The optional class name for the AvatarGroup component.
   */
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
