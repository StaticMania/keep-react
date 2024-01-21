import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { cn } from '../../helpers/cn'
import { ProgressSizes, progressTheme } from './theme'

export interface ProgressProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * The size of the progress component.
   */
  size?: keyof ProgressSizes
  /**
   * The label for the progress component.
   */
  label?: string
  /**
   * The position of the label relative to the progress component.
   */
  labelPosition?: 'inside' | 'outside' | 'none'
  /**
   * Whether to show the progress value as a label.
   */
  labelProgress?: boolean
  /**
   * Whether to show a popup label for the progress value.
   */
  showPopupLabelProgress?: boolean
  /**
   * Whether the progress component should have rounded corners.
   */
  rounded?: boolean
  /**
   * Whether the progress component should have a border.
   */
  bordered?: boolean
  /**
   * The progress value.
   */
  progress: number
}

export const Progress: FC<ProgressProps> = ({
  color = 'blue',
  label = 'progressbar',
  labelPosition = 'none',
  labelProgress = false,
  showPopupLabelProgress = false,
  rounded = true,
  bordered = false,
  progress,
  size = 'md',
  className,
  ...props
}): ReactElement => {
  const theme = progressTheme

  return (
    <>
      <div id="progress-id" aria-label={label} aria-valuenow={progress} role="progressbar" {...props}>
        {label && labelPosition === 'outside' && (
          <div className={theme.label}>
            <span>{label}</span>
          </div>
        )}
        <div className={theme.base}>
          <div
            className={cn(
              theme.size[size],
              theme.progressBar.base,
              theme.progressBar.progressBaseColor[color],
              theme.progressBar.rounded[rounded ? 'on' : 'off'],
              bordered && theme.progressBar.bordered.on.color[color],
              bordered ? theme.progressBar.bordered.on.base : theme.progressBar.bordered.off,
              className,
            )}>
            <div
              className={cn(
                theme.size[size],
                theme.progressBar.bar,
                theme.progressBar.progressPercentageColor[color],
                theme.progressBar.rounded[rounded ? 'on' : 'off'],
              )}
              style={{ width: `${progress}%` }}>
              {label && labelPosition === 'inside' && label}
              {showPopupLabelProgress && (
                <span
                  className={cn(
                    theme.progressBar.popupLabelProgress,
                    theme.progressBar.progressBaseColor[color],
                    theme.progressBar.progressPercentage.color[color],
                  )}>
                  {progress}%
                </span>
              )}
            </div>
          </div>
          {labelProgress && (
            <span
              className={cn(
                theme.progressBar.progressPercentage.base,
                theme.progressBar.progressPercentage.color[color],
              )}>
              {progress}%
            </span>
          )}
        </div>
      </div>
    </>
  )
}

Progress.displayName = 'Progress'
