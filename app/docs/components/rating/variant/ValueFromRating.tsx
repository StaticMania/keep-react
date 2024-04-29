'use client'
import { Rating, RatingStar } from '../../../../src'

const ValueFromRating = () => {
  return (
    <Rating>
      {[1, 2, 3, 4, 5].map((rating) => (
        <RatingStar value={rating} key={rating}></RatingStar>
      ))}
    </Rating>
  )
}

const ValueFromRatingCode = `
import { Rating, RatingStar } from 'keep-react'

export const RatingComponent = () => {
  const handleRating = (value) => {
    console.log(value)
  }
  return (
    <Rating handleRating={handleRating}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <RatingStar value={rating} key={rating}></RatingStar>
      ))}
    </Rating>
  )
}
`

export { ValueFromRating, ValueFromRatingCode }
