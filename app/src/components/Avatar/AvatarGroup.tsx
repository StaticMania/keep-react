import type { FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the AvatarGroup component.
 * @type {AvatarGroupProps}
 */
export type AvatarGroupProps = PropsWithChildren<{
  /**
   * The children of the AvatarGroup component.
   * @type {ReactNode}
   */
  children: ReactNode
  /**
   * The optional class name for the AvatarGroup component.
   * @type {string}
   * @default ''
   */
  className?: string
}>

export const AvatarGroup: FC<AvatarGroupProps> = ({ children, className }) => {
  return (
    <div data-testid="avatar-group-element" className={cn('flex items-center -space-x-2', className)}>
      {children}
    </div>
  )
}

AvatarGroup.displayName = 'Avatar.Group'
