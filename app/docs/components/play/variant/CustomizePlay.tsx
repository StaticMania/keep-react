'use client'
import { Play } from '../../../../src'

const CustomizePlay = () => {
  return (
    <div className="p-2">
      <Play className="bg-black/40 backdrop-blur-sm hover:bg-black/70">
        <Play.Player>
          <Play.Close className="rounded-full"></Play.Close>
          <Play.Frame
            className="rounded-2xl border-none"
            src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
    </div>
  )
}

const CustomizePlayCode = `
'use client'
import { Play } from 'keep-react'

export const PlayComponent = () => {
  return (
      <Play className="bg-black/40 backdrop-blur-sm hover:bg-black/70">
        <Play.Player>
          <Play.Close className="rounded-full"></Play.Close>
          <Play.Frame
            className="rounded-2xl border-none"
            src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=N45CwzuoZ8GA-3L0"></Play.Frame>
        </Play.Player>
      </Play>
  )
}
`

export { CustomizePlay, CustomizePlayCode }
