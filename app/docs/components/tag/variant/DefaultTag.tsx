'use client'
import { Tag } from '~/src'

const DefaultTag = () => {
  return (
    <div className="inline-block">
      <Tag color="gray">Default Tag</Tag>
    </div>
  )
}

const DefaultTagCode = `
"use client";
import { Tag } from "keep-react";

export const TagComponent = () => {
  return <Tag color="gray">Default Tag</Tag>;
}
`

export { DefaultTag, DefaultTagCode }
