'use client'
import { Button } from '~/src'
import { Gear, SquaresFour } from 'phosphor-react'

const KeepButtonIcon = () => {
  return (
    <div className="flex h-24 flex-wrap items-center gap-2 p-4">
      <Button notificationLabel="100" variant="primary" size="md">
        Messages
      </Button>
      <Button variant="primary" size="md">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button variant="primary" size="md">
        Dashboard
        <span className="pl-2">
          <SquaresFour size={24} />
        </span>
      </Button>
    </div>
  )
}

const KeepButtonIconCode = `
"use client";
import { Button } from "keep-react";
import { Gear, SquaresFour, Cube } from "phosphor-react";

export const ButtonComponent = () => {
  return (
    <>
      <Button notificationLabel="100" variant="primary" size="md">Messages</Button>
      <Button variant="primary" size="md">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button variant="primary" size="md">
        Dashboard
        <span className="pl-2">
          <SquaresFour size={24} />
        </span>
      </Button>
    </>
  );
};
`

export { KeepButtonIcon, KeepButtonIconCode }
