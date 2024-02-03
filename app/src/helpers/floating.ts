import type { Middleware, Placement } from '@floating-ui/react'
import { arrow, autoPlacement, flip, offset, shift } from '@floating-ui/react'
import type { RefObject } from 'react'

/**
 * @see https://floating-ui.com/docs/middleware
 */

/**
 * Returns an array of middleware functions to be used with Popper.js for positioning a floating element.
 * @param {Object} options - The options object.
 * @param {RefObject<HTMLDivElement>} options.arrowRef - The ref object for the arrow element.
 * @param {'auto' | Placement} options.placement - The placement of the floating element.
 * @returns {Middleware[]} An array of middleware functions.
 *
 * @example
 * ````tsx
 * const arrowRef = useRef<HTMLDivElement>(null)
 * const middleware = getMiddleware({ arrowRef, placement: 'top' })
 *
 * <Floating middleware={middleware} arrowRef={arrowRef} />
 * ````
 */
export const getMiddleware = ({
  arrowRef,
  placement,
}: {
  arrowRef?: RefObject<HTMLDivElement>
  placement: 'auto' | Placement
}): Middleware[] => {
  const middleware = []

  middleware.push(offset(8))
  middleware.push(placement === 'auto' ? autoPlacement() : flip())
  middleware.push(shift({ padding: 8 }))

  if (arrowRef?.current) {
    middleware.push(arrow({ element: arrowRef.current }))
  }

  return middleware
}

/**
 * Returns the placement value if it's not 'auto', otherwise returns undefined.
 * @param placement - The placement value to check.
 * @returns The placement value or undefined.
 */
export const getPlacement = ({ placement }: { placement: 'auto' | Placement }): Placement | undefined => {
  return placement === 'auto' ? undefined : placement
}

/**
 * Returns the opposite placement of the given placement for arrow.
 * @param placement - The placement of the arrow.
 * @returns The opposite placement of the given placement for arrow.
 */
export const getArrowPlacement = ({ placement }: { placement: Placement }): Placement => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] as Placement
}
