'use client'
import { Rating } from '../../../../src'

const VariantOfRating = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="regular" />
      <Rating.Star filledType="duotone" />
      <Rating.Star filledType="bold" />
      <Rating.Star filledType="light" />
      <Rating.Star filledType="thin" />
    </Rating>
  )
}

const VariantOfRatingCode = `
'use client'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="regular" />
      <Rating.Star filledType="duotone" />
      <Rating.Star filledType="bold" />
      <Rating.Star filledType="light" />
      <Rating.Star filledType="thin" />
    </Rating>
  )
}
`

export { VariantOfRating, VariantOfRatingCode }
