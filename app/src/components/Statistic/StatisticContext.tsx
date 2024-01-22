'use client'
import { createContext, ReactNode, useContext } from 'react'

/**
 * Represents the context for the Statistic component.
 * @interface StatisticContext
 */
export type StatisticPropsContext = {
  /**
   * Determines whether to show the dollar sign icon.
   * @type {boolean}
   * @default false
   */
  showDollar?: boolean
  /**
   * Determines whether to show the filter icon.
   * @type {boolean}
   * @default false
   */
  showFilter?: boolean
  /**
   * Specifies the background color of the icon.
   * @type {'primary' | 'success'}
   * @default 'primary'
   */
  iconBg?: 'primary' | 'success'
  /**
   * The child components of the Statistic component.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode
  /**
   * The label for the filter.
   * @type {string}
   * @default ''
   */
  filterLabel?: string
  /**
   * The data for the filter.
   * @type {string[]}
   * @default []
   */
  filterData?: string[]
}

export const StatisticContext = createContext<StatisticPropsContext | undefined>(undefined)

export function useStatisticContext(): StatisticPropsContext {
  const context = useContext(StatisticContext)

  if (!context) {
    throw new Error('useStatisticContext should be used within the StatisticContext provider!')
  }

  return context
}
