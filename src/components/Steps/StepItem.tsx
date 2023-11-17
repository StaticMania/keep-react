import { FC, ReactNode } from 'react'
import { useStepContext } from './StepContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface StepItemProps {
  title?: string
  description?: string
  numberOfSteps?: number
  completed?: boolean
  icon?: ReactNode
  active?: boolean
  className?: string
  titleStyle?: string
  descriptionStyle?: string
  stepStyle?: string
}

export const StepItem: FC<StepItemProps> = ({
  title,
  description,
  numberOfSteps = 1,
  completed = false,
  active = false,
  className,
  titleStyle,
  descriptionStyle,
  stepStyle,
  icon,
}) => {
  const { stepType, borderType = 'solid' } = useStepContext()
  const theme = useTheme().theme.step
  return (
    <div
      className={cn(
        theme.items.base,
        completed ? theme.main.completed.on : theme.main.completed.off,
        theme.main.borderType[borderType],
        className,
      )}>
      {stepType === 'number' && (
        <div
          className={cn(
            theme.items.stepType.base,
            theme.items.stepType.number.base,
            completed && theme.items.stepType.number.on,
            !completed && theme.items.stepType.number.off,
            active && theme.items.stepType.number.active,
            stepStyle,
          )}>
          {numberOfSteps}
        </div>
      )}
      {stepType === 'point' && (
        <div
          className={cn(
            theme.items.stepType.base,
            theme.items.stepType.point.base,
            completed && theme.items.stepType.point.on,
            active && theme.items.stepType.point.active,
            stepStyle,
          )}>
          &nbsp;
        </div>
      )}
      {stepType === 'icon' && (
        <div
          className={cn(
            theme.items.stepType.base,
            completed && theme.items.stepType.icon.on,
            !completed && !active && theme.items.stepType.icon.off,
            active && theme.items.stepType.icon.active,
            stepStyle,
          )}>
          {icon}
        </div>
      )}

      <div className={cn(theme.stepText.base)}>
        <h3
          className={cn(
            theme.stepText.title.base,
            active ? theme.stepText.title.active : theme.stepText.title.inActive,
            titleStyle,
          )}>
          {title}
        </h3>
        <p
          className={cn(
            theme.stepText.description.base,
            active ? theme.stepText.description.active : theme.stepText.description.inActive,
            descriptionStyle,
          )}>
          {description}
        </p>
      </div>
    </div>
  )
}
