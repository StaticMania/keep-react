'use client'
import { Play } from '../../../../src'

const PlayColor = () => {
  return (
    <div className="flex items-center gap-x-3 p-2">
      <Play color="primary">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play color="secondary">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play color="success">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play color="warning">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
      <Play color="error">
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
    </div>
  )
}

const PlayColorCode = `
'use client'
import { Play } from 'keep-react'

export const PlayComponent = () => {
  return (
    <Play color="primary">
      <Play.Player>
        <Play.Close></Play.Close>
        <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
      </Play.Player>
    </Play>
  )
}
`

export { PlayColor, PlayColorCode }
