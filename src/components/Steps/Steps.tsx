'use client'
import { FC } from 'react'
import { StepItem } from './StepItem'
import { StepContext } from './StepContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface KeepStepTheme {
  base: string
  items: {
    base: string
    stepType: {
      base: string
      point: {
        base: string
        on: string
        off: string
        active: string
      }
      icon: {
        active: string
        base: string
        on: string
        off: string
      }
      number: { active: string; base: string; on: string; off: string }
    }
  }
  stepText: {
    base: string
    title: {
      base: string
      active: string
      inActive: string
    }
    description: {
      base: string
      active: string
      inActive: string
    }
  }
  main: {
    completed: {
      on: string
      off: string
    }
    borderType: {
      solid: string
      dashed: string
      none: string
    }
  }
}

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
  children?: React.ReactNode

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
  const theme = useTheme().theme.step
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
