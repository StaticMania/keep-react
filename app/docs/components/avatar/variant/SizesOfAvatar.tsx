'use client'
import { Avatar } from '../../../../src'

const SizesOfAvatar = () => {
  return (
    <div className="flex items-end gap-3">
      <Avatar shape="square" size="xs" />
      <Avatar shape="square" size="sm" />
      <Avatar shape="square" size="md" />
      <Avatar shape="square" size="lg" />
      <Avatar shape="square" size="xl" />
      <Avatar shape="square" size="2xl" />
    </div>
  )
}

const SizesOfAvatarCode = `
"use client";
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return (
    <>
      <Avatar shape="square" size="xs" />
      <Avatar shape="square" size="sm" />
      <Avatar shape="square" size="md" />
      <Avatar shape="square" size="lg" />
      <Avatar shape="square" size="xl" />
      <Avatar shape="square" size="2xl" />
    </>
  );
}
`

export { SizesOfAvatar, SizesOfAvatarCode }
