'use client'
import { Play } from 'phosphor-react'
import { PlayButton } from '~/src'

const DefaultPlayButton = () => {
  return (
    <div className="flex h-20 items-center justify-start p-5">
      <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
    </div>
  )
}

const DefaultPlayButtonCode = `
"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "keep-react";

export const PlayButtonComponent = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
}
`

export { DefaultPlayButton, DefaultPlayButtonCode }
