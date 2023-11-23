'use client'
import { Button } from '~/src'

const DefaultButtonGroup = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
        <Button buttonType="primary" positionInGroup="start">
          Profile
        </Button>
        <Button buttonType="primary" positionInGroup="middle">
          Settings
        </Button>
        <Button buttonType="primary" positionInGroup="end">
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
      <Button buttonType="primary" positionInGroup="start">Profile</Button>
      <Button buttonType="primary" positionInGroup="middle">Settings</Button>
      <Button buttonType="primary" positionInGroup="end">Messages</Button>
    </Button.Group>
  );
};
`

export { DefaultButtonGroup, DefaultButtonGroupCode }
