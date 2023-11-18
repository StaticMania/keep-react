/**
 * The AvatarGroup component displays a group of avatars.
 * 
 * @remarks
 * This component is used to display a group of avatars in a horizontal row. It takes an array of `Avatar` components as its children.
 * 
 * @param children - The avatars to be displayed in the group.
 * @see https://react.keepdesign.io/docs/components/avatargroup
 */

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
