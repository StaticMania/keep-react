import { keepNotificationTheme } from '../components'
import { keepAccordionTheme } from '../components/Accordion'
import { keepAlertTheme } from '../components/Alert'
import { keepAvatarTheme } from '../components/Avatar/Avatar'
import { keepBadgeTheme } from '../components/Badge'
import { keepBreadCrumbTheme } from '../components/Breadcrumb'
import { KeepCardTheme } from '../components/Card'
import { KeepCarouselTheme } from '../components/Carousel'
import { keepCheckboxTheme } from '../components/CheckBox'
import { keepCheckboxGroupTheme } from '../components/CheckboxGroup'
import { keepDropdownTheme } from '../components/Dropdown'
import { keepEmptyTheme } from '../components/Empty'
import { keepFloatingTheme } from '../components/Floating'
import { keepFormControlTheme } from '../components/FormControls/formControls'
import { keepModalTheme } from '../components/Modal'
import { KeepNavigationTheme } from '../components/Navigation'
import { keepPaginationTheme } from '../components/Pagination'
import { keepPopoverTheme } from '../components/Popover'
import { keepProgressTheme } from '../components/Progress'
import { keepRatingTheme } from '../components/Rating'
import { KeepSidebarTheme } from '../components/Sidebar'
import { keepSkeletonTheme } from '../components/Skeleton'
import { KeepSpinnerTheme } from '../components/Spinner'
import { keepStatisticTheme } from '../components/Statistic'
import { KeepStepTheme } from '../components/Steps'
import { keepToggleTheme } from '../components/Switch'
import { keepTableTheme } from '../components/Table'
import { keepTabTheme } from '../components/Tabs'
import { keepTagTheme } from '../components/Tag'
import { keepTimelineTheme } from '../components/Timeline'
import { keepTreeTheme } from '../components/Tree'
import { keepUploadTheme } from '../components/Upload'
import { DeepPartial } from '../helpers/deep-partial'

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

export interface KeepButtonVariant {
  primary: string
  outlineGray: string
  outlinePrimary: string
  dashed: string
  text: string
  linkPrimary: string
  linkGray: string
  default: string
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

export type KeepTypography =
  | `heading-${1 | 2 | 3 | 4 | 5 | 6}`
  | `body-${1 | 2 | 3 | 4 | 5 | 6}`
  | `display-${1 | 2 | 3 | 4}`
  | `description-${1 | 2 | 3 | 4}`

export type KeepHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type CustomKeepTheme = DeepPartial<KeepTheme>

export interface KeepTheme {
  alert: keepAlertTheme
  avatar: keepAvatarTheme
  accordion: keepAccordionTheme
  badge: keepBadgeTheme
  breadcrumb: keepBreadCrumbTheme
  card: KeepCardTheme
  carousel: KeepCarouselTheme
  dropdown: keepDropdownTheme
  progress: keepProgressTheme
  popover: keepPopoverTheme
  pagination: keepPaginationTheme
  navigation: KeepNavigationTheme
  notification: keepNotificationTheme
  tooltip: keepFloatingTheme
  modal: keepModalTheme
  rating: keepRatingTheme
  spinner: KeepSpinnerTheme
  tabs: keepTabTheme
  sidebar: KeepSidebarTheme
  switch: keepToggleTheme
  skeleton: keepSkeletonTheme
  tag: keepTagTheme
  table: keepTableTheme
  timeline: keepTimelineTheme
  empty: keepEmptyTheme
  statistic: keepStatisticTheme
  upload: keepUploadTheme
  checkbox: keepCheckboxTheme
  formControls: keepFormControlTheme
  checkboxGroup: keepCheckboxGroupTheme
  tree: keepTreeTheme
  step: KeepStepTheme
}
