'use client'
import { Play } from '../../../../src'

const PlaySize = () => {
  return (
    <div className="flex items-center gap-x-3 p-2">
      <Play size="sm">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play size="md">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play size="lg">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play size="xl">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play size="2xl">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
    </div>
  )
}

const PlaySizeCode = `
'use client'
import { Play } from 'keep-react'

export const PlayComponent = () => {
  return (
    <Play size="md">
      <Play.Player>
        <Play.Close></Play.Close>
        <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
      </Play.Player>
    </Play>
  )
}
`

export { PlaySize, PlaySizeCode }
