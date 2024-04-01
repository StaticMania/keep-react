import React, { ReactNode } from 'react'
import { carouselTheme } from './theme'
type ButtonsPropTypes = {
  children: ReactNode
}

const Buttons: React.FC<ButtonsPropTypes> = ({ children }) => {
  const theme = carouselTheme
  return <div className={theme.controls.button.container}>{children}</div>
}

export default Buttons
