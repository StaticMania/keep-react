'use client'
import { Star } from 'phosphor-react'
import { Rating } from '../../../../src'

const RatingTypes = () => {
  return (
    <Rating>
      <Rating.Star value={1}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={2}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={3}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={4}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={5}>
        <Star size={20} />
      </Rating.Star>
    </Rating>
  )
}

const RatingTypesCode = `
'use client'
import { Star } from 'phosphor-react'
import { Rating } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating>
      <Rating.Star value={1}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={2}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={3}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={4}>
        <Star size={20} />
      </Rating.Star>
      <Rating.Star value={5}>
        <Star size={20} />
      </Rating.Star>
    </Rating>
  )
}

`

export { RatingTypes, RatingTypesCode }
