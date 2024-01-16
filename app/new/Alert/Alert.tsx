import { Children, FC, ReactElement, ReactNode, cloneElement } from 'react'
import { Container } from './Container'
import { Description } from './Description'
import { Title } from './Title'
import { Dismiss } from './Dismiss'
import { Link } from './Link'
import { Icon } from './Icon'
import { cn } from '~/app/src/helpers/cn'

interface AlertProps {
  children?: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  className?: string
  withBg?: boolean
  onClick?: boolean | (() => void)
  dismiss?: boolean
  [key: string]: any
}

const alertTheme = {
  colorWithBg: {
    primary: 'text-primary-500 bg-primary-50 border border-primary-200',
    secondary: 'text-metal-900 bg-metal-50 border border-metal-200',
    success: 'text-success-500 bg-success-25 border border-success-200',
    warning: 'text-warning-500 bg-warning-25 border border-warning-200',
    error: 'text-error-500 bg-error-25 border border-error-100',
  },
  colorWithOutBg: {
    primary: 'bg-white text-primary-500 border border-primary-200',
    secondary: 'bg-white text-metal-900 border border-metal-200',
    success: 'bg-white text-success-500 border border-success-200',
    warning: 'bg-white text-warning-500 border border-warning-200',
    error: 'bg-white text-error-500 border border-error-100',
  },
}

export const AlertComponent: FC<AlertProps> = ({
  children,
  color = 'primary',
  withBg,
  onClick,
  dismiss,
  className,
}) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child as ReactElement<any>, { color: color, onClick: onClick }),
  )
  return (
    <div
      className={cn(
        ' w-full justify-between gap-2 rounded-xl p-4 shadow-large md:max-w-xl',
        withBg ? alertTheme.colorWithBg[color] : alertTheme.colorWithOutBg[color],
        dismiss ? 'hidden' : 'flex',
        className,
      )}>
      {childrenWithProps}
    </div>
  )
}

Container.displayName = 'Alert.Container'
Description.displayName = 'Alert.Description'
Title.displayName = 'Alert.Title'
Dismiss.displayName = 'Alert.Dismiss'
Link.displayName = 'Alert.Link'
Icon.displayName = 'Alert.Icon'

export const Alert = Object.assign(AlertComponent, {
  Container,
  Description,
  Title,
  Dismiss,
  Link,
  Icon,
})
