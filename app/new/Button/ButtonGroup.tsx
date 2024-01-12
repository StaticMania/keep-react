import { FC, ReactNode } from 'react'

interface ButtonGroupProps {
  className?: string
  children?: ReactNode
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return <div className={'flex items-center'}>{children}</div>
}
