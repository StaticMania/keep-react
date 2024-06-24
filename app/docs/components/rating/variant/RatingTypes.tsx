'use client'
import { Star } from 'phosphor-react'
import { Rating, RatingStar } from '../../../../src'

const RatingTypes = () => {
  return (
    <Rating>
      <RatingStar value={1}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={2}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={3}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={4}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={5}>
        <Star size={20} />
      </RatingStar>
    </Rating>
  )
}

const RatingTypesCode = `
'use client'
import { Star } from 'phosphor-react'
import { Rating, RatingStar } from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating>
      <RatingStar value={1}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={2}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={3}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={4}>
        <Star size={20} />
      </RatingStar>
      <RatingStar value={5}>
        <Star size={20} />
      </RatingStar>
    </Rating>
  )
}

`

export { RatingTypes, RatingTypesCode }
