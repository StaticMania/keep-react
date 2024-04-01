import React, { ReactNode, FC } from 'react'
import { cn } from '../../helpers/cn'
import { carouselTheme } from './theme'

type ItemProptypes = {
  children: ReactNode
  slideClass?: string
}

const Item: FC<ItemProptypes> = ({ children, slideClass }) => {
  const theme = carouselTheme
  return <div className={cn(theme.item.slide, slideClass)}>{children}</div>
}

export default Item
