import React, { ReactNode, FC } from 'react'
import { carouselTheme } from './theme'
import { cn } from '../../helpers/cn'

type SlidesProptypes = {
  children: ReactNode
  slideContainerClasses?: string
}
const Slides: FC<SlidesProptypes> = ({ children, slideContainerClasses }) => {
  const theme = carouselTheme
  return <div className={cn(theme.item.container, slideContainerClasses)}>{children}</div>
}

export default Slides
