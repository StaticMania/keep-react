'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { AlertContext } from './AlertContext'
import { ColorVariant, alertTheme } from './theme'

interface AlertComponentProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof ColorVariant
  withBg?: boolean
  dismiss?: boolean
}

const Alert = forwardRef<HTMLDivElement, AlertComponentProps>(
  (
    { children, color = 'secondary', withBg, dismiss, className, ...props }: AlertComponentProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          alertTheme.root.base,
          withBg ? alertTheme.colorWithBg[color] : alertTheme.colorWithOutBg[color],
          dismiss ? 'hidden' : 'flex',
          className,
        )}>
        <AlertContext.Provider value={{ color }}>{children}</AlertContext.Provider>
      </div>
    )
  },
)

Alert.displayName = 'Alert'

export { Alert }
