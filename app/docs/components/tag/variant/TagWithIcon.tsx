'use client'
import { Clock, X } from 'phosphor-react'
import { Tag } from '../../../../src'

const TagWithIcon = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag>
        <Clock size="16" color="#455468" />
        Icon Tag
      </Tag>
      <Tag>
        Icon Tag
        <X size="16" color="#455468" />
      </Tag>
      <Tag rounded>
        <Clock size="16" color="#455468" />
        Round Tag
      </Tag>
    </div>
  )
}

const TagWithIconCode = {
  'TagComponent.tsx': `
'use client'
import { Tag } from 'keep-react'
import { Clock, X } from 'phosphor-react'

export const TagComponent = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag>
        <Clock size="16" color="#455468" />
        Icon Tag
      </Tag>
      <Tag>
        Icon Tag
        <X size="16" color="#455468" />
      </Tag>
      <Tag rounded>
        <Clock size="16" color="#455468" />
        Round Tag
      </Tag>
    </div>
  )
}

`,
}

export { TagWithIcon, TagWithIconCode }
