'use client'
import { createContext, useContext } from 'react'

/**
 * Represents the context for the Timeline component.
 * @interface TimelineContext
 */
export type TimelinePropsContext = {
  /**
   * Determines whether the timeline is horizontal.
   * @type {boolean}
   * @default false
   */
  horizontal?: boolean
  /**
   * Determines whether the timeline has a gradient point.
   * @type {boolean}
   * @default false
   */
  gradientPoint?: boolean
  /**
   * The color of the gradient.
   * @type {string}
   * @default 'info'
   */
  gradientColor?: string
}

export const TimelineContext = createContext<TimelinePropsContext | undefined>(undefined)
export function useTimelineContext(): TimelinePropsContext {
  const context = useContext(TimelineContext)

  if (!context) {
    throw new Error('useTimelineContext should be used within the TimelineContext provider!')
  }

  return context
}
