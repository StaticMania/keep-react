'use client'

import { Typography } from '../../../../src'

const Heading = () => {
  return (
    <Typography variant="div" className="space-y-4">
      <Typography variant="heading-1">Heading 1</Typography>
      <Typography variant="heading-2">Heading 2</Typography>
      <Typography variant="heading-3">Heading 3</Typography>
      <Typography variant="heading-4">Heading 4</Typography>
      <Typography variant="heading-5">Heading 5</Typography>
      <Typography variant="heading-6">Heading 6</Typography>
    </Typography>
  )
}

const HeadingCode = `
'use client'
import { Typography } from 'keep-react'
export const HeadingTypo = () => {
  return (
    <Typography variant='div' className="space-y-4">
      <Typography variant="heading-1">Heading 1</Typography>
      <Typography variant="heading-2">Heading 2</Typography>
      <Typography variant="heading-3">Heading 3</Typography>
      <Typography variant="heading-4">Heading 4</Typography>
      <Typography variant="heading-5">Heading 5</Typography>
      <Typography variant="heading-6">Heading 6</Typography>
    </Typography>
  )
}
`

export { Heading, HeadingCode }
