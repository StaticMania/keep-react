'use client'
import { Play } from '../../../../src'

const DefaultPlay = () => {
  return (
    <div className="p-2">
      <Play>
        <Play.Player>
          <Play.Close></Play.Close>
          <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
    </div>
  )
}

const DefaultPlayCode = `
'use client'
import { Play } from 'keep-react'

export const PlayComponent = () => {
  return (
    <Play>
      <Play.Player>
        <Play.Close></Play.Close>
        <Play.Frame src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
      </Play.Player>
    </Play>
  )
}
`

export { DefaultPlay, DefaultPlayCode }
