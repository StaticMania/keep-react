'use client'
import { Rating } from '../../../../src'

const DefaultRating = () => {
  return (
    <Rating>
      <Rating.Star value={1} />
      <Rating.Star value={2} />
      <Rating.Star value={3} />
      <Rating.Star value={4} />
      <Rating.Star value={5} />
    </Rating>
  )
}

const DefaultRatingCode = `
'use client'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating>
      <Rating.Star value={1} />
      <Rating.Star value={2} />
      <Rating.Star value={3} />
      <Rating.Star value={4} />
      <Rating.Star value={5} />
    </Rating>
  )
}
`

export { DefaultRating, DefaultRatingCode }
