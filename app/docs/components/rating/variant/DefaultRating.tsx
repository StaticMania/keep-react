import { Rating, RatingStar } from '../../../../src'

const DefaultRating = () => {
  return (
    <Rating>
      <RatingStar value={1} />
      <RatingStar value={2} />
      <RatingStar value={3} />
      <RatingStar value={4} />
      <RatingStar value={5} />
    </Rating>
  )
}

const DefaultRatingCode = {
  'RatingComponent.tsx': `
import { Rating, RatingStar }  from 'keep-react'

export const RatingComponent = () => {
  return (
    <Rating>
      <RatingStar value={1} />
      <RatingStar value={2} />
      <RatingStar value={3} />
      <RatingStar value={4} />
      <RatingStar value={5} />
    </Rating>
  )
}
`,
}

export { DefaultRating, DefaultRatingCode }
