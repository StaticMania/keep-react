export interface KeepCheckboxShape {
  circle: string
  round: string
}

export interface KeepShapes {
  square: string
  round: string
  roundSquare: string
}

export interface KeepPositions {
  'bottom-left': string
  'bottom-right': string
  'bottom-center': string
  'top-left': string
  'top-center': string
  'top-right': string
  'center-left': string
  center: string
  'center-right': string
}

export interface KeepSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
}

export interface KeepBoolean {
  off: string
  on: string
}

export interface KeepStateColors {
  info: string
  error: string
  success: string
  warning: string
}

export interface KeepColors extends KeepStateColors {
  [key: string]: string
  blue: string
  cyan: string
  dark: string
  gray: string
  green: string
  indigo: string
  light: string
  lime: string
  pink: string
  purple: string
  red: string
  teal: string
  yellow: string
}

export interface KeepGradientColors extends Omit<KeepStateColors, 'warning'> {
  [key: string]: string
  cyan: string
  lime: string
  pink: string
  purple: string
  teal: string
}

export interface KeepGradientDuoToneColors {
  cyanToBlue: string
  greenToBlue: string
  pinkToOrange: string
  purpleToBlue: string
  purpleToPink: string
  redToYellow: string
  tealToLime: string
}

export type KeepTypography = `heading-${1 | 2 | 3 | 4 | 5 | 6}` | `body-${1 | 2 | 3 | 4 | 5}` | `display`

export type KeepHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
