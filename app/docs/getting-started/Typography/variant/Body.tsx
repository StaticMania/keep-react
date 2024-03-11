'use client'

import { Typography } from '../../../../src'

const BodyTypo = () => {
  return (
    <Typography variant="div" className="space-y-4">
      <Typography variant="body-1">Body Text 1</Typography>
      <Typography variant="body-2">Body Text 2</Typography>
      <Typography variant="body-3">Body Text 3</Typography>
      <Typography variant="body-4">Body Text 4</Typography>
      <Typography variant="body-5">Body Text 5</Typography>
    </Typography>
  )
}

const BodyTypoCode = `
'use client'
import { Typography } from 'keep-react'
export const BodyTypo = () => {
  return (
    <Typography variant='div' className="space-y-4">
      <Typography variant="body-1">Body Text 1</Typography>
      <Typography variant="body-2">Body Text 2</Typography>
      <Typography variant="body-3">Body Text 3</Typography>
      <Typography variant="body-4">Body Text 4</Typography>
      <Typography variant="body-5">Body Text 5</Typography>
    </Typography>
  )
}
`

export { BodyTypo, BodyTypoCode }
