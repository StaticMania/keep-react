'use client'
import { Rating } from '../../../../src'

const ValueFromRating = () => {
  return (
    <Rating>
      {[1, 2, 3, 4, 5].map((rating) => (
        <Rating.Star value={rating} key={rating}></Rating.Star>
      ))}
    </Rating>
  )
}

const ValueFromRatingCode = `
'use client'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  const handleRating = (value) => {
    console.log(value)
  }
  return (
    <Rating handleRating={handleRating}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <Rating.Star value={rating} key={rating}></Rating.Star>
      ))}
    </Rating>
  )
}
`

export { ValueFromRating, ValueFromRatingCode }
