'use client'
import { createContext, useContext } from 'react'

export type PlayPropsContext = {
  handleModal?: () => void
}

export const PlayContext = createContext<PlayPropsContext | undefined>(undefined)

export function usePlayContext(): PlayPropsContext {
  const context = useContext(PlayContext)

  if (!context) {
    throw new Error('usePlayContext should be used within the PlayContext provider!')
  }

  return context
}
