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

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode
}>

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children }) => {
  return (
    <div data-testid="avatar-group-element" className="flex items-center -space-x-2">
      {children}
    </div>
  )
}

AvatarGroup.displayName = 'Avatar.Group'
