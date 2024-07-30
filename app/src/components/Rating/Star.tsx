'use client'
import { FC, Fragment, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useRatingContext } from './Context'

export interface StarProps {
  value?: number
  children?: ReactNode
  className?: string
  inputStyle?: string
}

export const RatingStar: FC<StarProps> = ({ value, children, className, inputStyle }) => {
  const { handleRating } = useRatingContext()
  return (
    <Fragment>
      <input
        id={`hs-ratings-readonly-${value}`}
        type="radio"
        className={cn(
          'peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0',
          inputStyle,
        )}
        name="hs-ratings-readonly"
        value={value}
        onClick={() => handleRating && value && handleRating(6 - value)}
      />
      <label
        htmlFor={`hs-ratings-readonly-${value}`}
        className={cn('pointer-events-none text-metal-200 peer-checked:text-warning-500', className)}>
        {children ?? (
          <svg
            className="size-5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        )}
      </label>
    </Fragment>
  )
}
