'use client'
import { FC } from 'react'
import { StepItem } from './StepItem'
import { StepContext } from './StepContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface StepsProps {
  stepType?: 'point' | 'icon' | 'number'
  children?: React.ReactNode
  borderType?: 'solid' | 'dashed' | 'none'
  className?: string
}

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
