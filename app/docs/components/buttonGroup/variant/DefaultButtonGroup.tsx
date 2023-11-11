'use client'
import { Button } from '~/src'

const DefaultButtonGroup = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
        <Button type="primary" positionInGroup="start">
          Profile
        </Button>
        <Button type="primary" positionInGroup="middle">
          Settings
        </Button>
        <Button type="primary" positionInGroup="end">
          Messages
        </Button>
      </Button.Group>
    </div>
  )
}

const DefaultButtonGroupCode = `
"use client";
import { Button } from "keep-react";

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button type="primary" positionInGroup="start">Profile</Button>
      <Button type="primary" positionInGroup="middle">Settings</Button>
      <Button type="primary" positionInGroup="end">Messages</Button>
    </Button.Group>
  );
};
`

export { DefaultButtonGroup, DefaultButtonGroupCode }
