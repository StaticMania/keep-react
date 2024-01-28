'use client'
import { Avatar } from '../../../../src'

const SizesOfAvatar = () => {
  return (
    <div className="flex items-end gap-3">
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
      <Avatar size="2xl" />
    </div>
  )
}

const SizesOfAvatarCode = `
import { Avatar } from "keep-react"

export const AvatarComponent = () => {
  return (
    <>
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
      <Avatar size="2xl" />
    </>
  )
}
`

export { SizesOfAvatar, SizesOfAvatarCode }
