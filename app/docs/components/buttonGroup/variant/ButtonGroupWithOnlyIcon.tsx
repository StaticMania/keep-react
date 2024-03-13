'use client'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'
import { Button } from '../../../../src'

const ButtonGroupWithOnlyIcon = () => {
  return (
    <Button.Group>
      <Button position="start" shape="icon">
        <Cube size={20} />
      </Button>
      <Button position="center" shape="icon">
        <Gear size={20} />
      </Button>
      <Button position="end" shape="icon">
        <ChatCircleDots size={20} />
      </Button>
    </Button.Group>
  )
}

const ButtonGroupWithOnlyIconCode = `
'use client'
import { Button } from 'keep-react'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button position="start" shape="icon">
        <Cube size={20} />
      </Button>
      <Button position="center" shape="icon">
        <Gear size={20} />
      </Button>
      <Button position="end" shape="icon">
        <ChatCircleDots size={20} />
      </Button>
    </Button.Group>
  )
}
`

export { ButtonGroupWithOnlyIcon, ButtonGroupWithOnlyIconCode }
