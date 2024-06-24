'use client'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'
import { Button, ButtonGroup } from '../../../../src'

const ButtonGroupWithOnlyIcon = () => {
  return (
    <ButtonGroup>
      <Button position="start" shape="icon">
        <Cube size={20} />
      </Button>
      <Button position="center" shape="icon">
        <Gear size={20} />
      </Button>
      <Button position="end" shape="icon">
        <ChatCircleDots size={20} />
      </Button>
    </ButtonGroup>
  )
}

const ButtonGroupWithOnlyIconCode = `
'use client'
import { Button, ButtonGroup } from 'keep-react'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

export const ButtonGroupComponent = () => {
  return (
    <ButtonGroup>
      <Button position="start" shape="icon">
        <Cube size={20} />
      </Button>
      <Button position="center" shape="icon">
        <Gear size={20} />
      </Button>
      <Button position="end" shape="icon">
        <ChatCircleDots size={20} />
      </Button>
    </ButtonGroup>
  )
}
`

export { ButtonGroupWithOnlyIcon, ButtonGroupWithOnlyIconCode }
