'use client'
import { Rating } from '../../../../src'

const DefaultRating = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
    </Rating>
  )
}

const DefaultRatingCode = `
'use client'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
    </Rating>
  )
}
`

export { DefaultRating, DefaultRatingCode }
