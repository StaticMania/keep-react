import { ReactNode, FC, Children, cloneElement, ReactElement } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  const childrenWithProps = Children.map(children, (child) => cloneElement(child as ReactElement<any>, { ...props }))
  return <div className={cn('flex flex-1 items-center gap-3', className)}>{childrenWithProps}</div>
}
