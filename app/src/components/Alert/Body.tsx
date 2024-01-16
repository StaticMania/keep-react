import { ReactNode, FC, Children, cloneElement, ReactElement } from 'react'
import { cn } from '../../helpers/cn'

export interface AlertBodyProps {
  children?: ReactNode
  className?: string
}

export const Body: FC<AlertBodyProps> = ({ children, className, ...props }) => {
  const childrenWithProps = Children.map(children, (child) => cloneElement(child as ReactElement<any>, { ...props }))
  return <div className={cn(className)}>{childrenWithProps}</div>
}
