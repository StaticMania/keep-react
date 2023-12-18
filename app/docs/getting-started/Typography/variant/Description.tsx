'use client'

import { Typography } from '~/src'

const Description = () => {
  return (
    <Typography variant="div" className="space-y-4">
      <Typography variant="description-1">Description 1</Typography>
      <Typography variant="description-2">Description 2</Typography>
      <Typography variant="description-3">Description 3</Typography>
      <Typography variant="description-4">Description 4</Typography>
    </Typography>
  )
}

const DescriptionCode = `
'use client'
import { Typography } from 'keep-react'
export const Description = () => {
  return (
    <Typography variant='div' className="space-y-4">
      <Typography variant="description-1">Description 1</Typography>
      <Typography variant="description-2">Description 2</Typography>
      <Typography variant="description-3">Description 3</Typography>
      <Typography variant="description-4">Description 4</Typography>
    </Typography>
  )
}
`

export { Description, DescriptionCode }
