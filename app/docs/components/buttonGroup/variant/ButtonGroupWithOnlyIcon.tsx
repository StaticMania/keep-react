'use client'
import { Button } from '~/src'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

const ButtonGroupWithOnlyIcon = () => {
  return (
    <Button.Group>
      <Button buttonType="primary" positionInGroup="start">
        <Cube size={24} />
      </Button>
      <Button buttonType="primary" positionInGroup="middle">
        <Gear size={24} />
      </Button>
      <Button buttonType="primary" positionInGroup="end">
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
      <Button buttonType="primary" positionInGroup="start">
        <Cube size={24} />
      </Button>
      <Button buttonType="primary" positionInGroup="middle">
        <Gear size={24} />
      </Button>
      <Button buttonType="primary" positionInGroup="end">
        <ChatCircleDots size={24} />
      </Button>
    </Button.Group>
  );
}
`

export { ButtonGroupWithOnlyIcon, ButtonGroupWithOnlyIconCode }
