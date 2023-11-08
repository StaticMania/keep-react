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
