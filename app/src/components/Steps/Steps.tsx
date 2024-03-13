'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { StepContext } from './StepContext'
import { StepItem } from './StepItem'
import { stepTheme } from './theme'

/**
 * Props for the Steps component.
 * @interface StepsProps
 */
export interface StepsProps {
  /**
   * The type of step to be rendered.
   * @type {'point' | 'icon' | 'number'}
   * @default 'point'
   */
  stepType?: 'point' | 'icon' | 'number'

  /**
   * The content to be rendered inside the Steps component.
   * @type {React.ReactNode}
   * @default null
   */
  children?: ReactNode

  /**
   * The type of border to be applied to the Steps component.
   * @type {'solid' | 'dashed' | 'none'}
   * @default 'solid'
   */
  borderType?: 'solid' | 'dashed' | 'none'

  /**
   * Additional CSS class name(s) to be applied to the Steps component.
   * @type {string}
   * @default null
   */
  className?: string
}

const StepsComponent: FC<StepsProps> = ({ children, className, stepType = 'point', borderType = 'solid' }) => {
  const theme = stepTheme
  return (
    <div className={cn(theme.base, className)}>
      <StepContext.Provider
        value={{
          stepType,
          borderType,
        }}>
        {children}
      </StepContext.Provider>
    </div>
  )
}

StepsComponent.displayName = 'Steps'
StepItem.displayName = 'Step.Item'

export const Steps = Object.assign(StepsComponent, {
  Item: StepItem,
})
