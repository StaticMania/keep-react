'use client'
import { Play } from 'phosphor-react'
import { PlayButton } from '~/src'

const BlurPlayButton = () => {
  return (
    <div className="flex h-20 items-center justify-start p-5">
      <PlayButton
        title="Play Video"
        variant="blur"
        circle={true}
        size="2xl"
        icon={<Play size="24" />}
        className="bg-black/40 backdrop-blur-sm"
      />
    </div>
  )
}

const BlurPlayButtonCode = `
"use client";
import { PlayButton } from "keep-react";
import { Play } from "phosphor-react";

export const PlayButtonComponent = () => {
  return (
     <PlayButton
      title="Play Video"
      variant="blur"
      circle={true}
      size="2xl"
      icon={<Play size="24" />}
      className="bg-black/40 backdrop-blur-sm"
    />
  );
}
`

export { BlurPlayButton, BlurPlayButtonCode }
