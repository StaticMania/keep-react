import React, { ReactNode } from 'react'
import { carouselTheme } from './theme'
type ControlPropTypes = {
  children: ReactNode
}
const CarouselControl: React.FC<ControlPropTypes> = ({ children }) => {
  const theme = carouselTheme
  return <div className={theme.controls.wrapper}>{children}</div>
}

export default CarouselControl
