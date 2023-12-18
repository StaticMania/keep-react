'use client'

import { Typography } from '~/src'

const Display = () => {
  return (
    <Typography variant="div" className="scale-75 space-y-4">
      <Typography variant="display-1">Display 1</Typography>
      <Typography variant="display-2">Display 2</Typography>
      <Typography variant="display-3">Display 3</Typography>
      <Typography variant="display-4">Display 4</Typography>
    </Typography>
  )
}

const DisplayCode = `
'use client'
import { Typography } from 'keep-react'
export const DisplayTypo = () => {
  return (
    <Typography variant='div' className="space-y-4">
      <Typography variant="display-1">Display 1</Typography>
      <Typography variant="display-2">Display 2</Typography>
      <Typography variant="display-3">Display 3</Typography>
    </Typography>
  )
}
`

export { Display, DisplayCode }
