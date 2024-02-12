'use client'
import { Rating } from '../../../../src'

const RatingTypes = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star starType="full" filledType="fill" />
      <Rating.Star starType="half" filledType="fill" />
    </Rating>
  )
}

const RatingTypesCode = `
'use client'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating size={30} className="space-x-1">
      <Rating.Star starType="full" filledType="fill" />
      <Rating.Star starType="half" filledType="fill" />
    </Rating>
  )
}
`

export { RatingTypes, RatingTypesCode }
