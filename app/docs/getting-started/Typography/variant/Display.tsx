'use client'
import { Typography } from '../../../../src'

const Display = () => {
  return (
    <Typography variant="div" className="">
      <Typography variant="display">Display</Typography>
    </Typography>
  )
}

const DisplayCode = `
'use client'
import { Typography } from 'keep-react'

export const DisplayTypo = () => {
  return (
    <Typography variant="div">
      <Typography variant="display">Display</Typography>
    </Typography>
  )
}

`

export { Display, DisplayCode }
