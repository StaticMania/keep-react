'use client'
import { Play } from 'phosphor-react'
import { PlayButton } from '~/src'

const NoBorderPlayButton = () => {
  return (
    <div className="flex h-20 items-center justify-start p-5">
      <PlayButton title="Play Video" type="text" icon={<Play size="24" />} />
    </div>
  )
}

const NoBorderPlayButtonCode = `
"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "keep-react";

export const PlayButtonComponent = () => {
  return (
    <PlayButton
    title="Play Video"
    type="text"
    icon={<Play size="24" />}
  />
  );
}
`

export { NoBorderPlayButton, NoBorderPlayButtonCode }
