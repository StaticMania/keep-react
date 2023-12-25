'use client'
import { Button } from '../../../../src'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

const ButtonGroupWithOnlyIcon = () => {
  return (
    <Button.Group>
      <Button variant="primary" positionInGroup="start">
        <Cube size={24} />
      </Button>
      <Button variant="primary" positionInGroup="middle">
        <Gear size={24} />
      </Button>
      <Button variant="primary" positionInGroup="end">
        <ChatCircleDots size={24} />
      </Button>
    </Button.Group>
  )
}

const ButtonGroupWithOnlyIconCode = `
"use client";
import { Button } from "keep-react";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button variant="primary" positionInGroup="start">
        <Cube size={24} />
      </Button>
      <Button variant="primary" positionInGroup="middle">
        <Gear size={24} />
      </Button>
      <Button variant="primary" positionInGroup="end">
        <ChatCircleDots size={24} />
      </Button>
    </Button.Group>
  );
}
`

export { ButtonGroupWithOnlyIcon, ButtonGroupWithOnlyIconCode }
