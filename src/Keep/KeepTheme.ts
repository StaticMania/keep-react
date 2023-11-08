import { keepAccordionTheme } from '../components/Accordion'
import { keepAlertTheme } from '../components/Alert'
import { keepAvatarTheme } from '../components/Avatar/Avatar'
import { keepBadgeTheme } from '../components/Badge'
import { keepBreadCrumbTheme } from '../components/Breadcrumb'
import { keepButtonTheme } from '../components/Button/Button'
import { keepButtonGroupTheme } from '../components/Button/ButtonGroup'
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
import { keepNotificationTheme } from '../components/Notification'
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

/**
 * Defines the shape of the Keep checkbox.
 */
export interface KeepCheckboxShape {
  circle: string
  round: string
}
/**
 * Interface representing different shapes for Keep.
 */
export interface KeepShapes {
  square: string
  round: string
  roundSquare: string
}

/**
 * Interface representing the positions of a Keep component.
 */
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

/**
 * Defines the sizes available for Keep components.
 */
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

/**
 * Interface for defining the colors of different types of buttons in Keep.
 */
export interface KeepButtonType {
  primary: string
  outlineGray: string
  outlinePrimary: string
  dashed: string
  text: string
  linkPrimary: string
  linkGray: string
  default: string
}

/**
 * Interface representing a boolean value with 'off' and 'on' properties.
 */
export interface KeepBoolean {
  off: string
  on: string
}

/**
 * Interface representing the colors for different states in the Keep app.
 */
export interface KeepStateColors {
  info: string
  error: string
  success: string
  warning: string
}

/**
 * Defines the colors used in the Keep application.
 * @interface
 */
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

/**
 * Defines the interface for the gradient colors used in the KeepTheme.
 * @interface KeepGradientColors
 */
export interface KeepGradientColors extends Omit<KeepStateColors, "warning"> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

/**
 * Interface for defining gradient duo-tone colors used in Keep.
 */
export interface KeepGradientDuoToneColors {
  cyanToBlue: string
  greenToBlue: string
  pinkToOrange: string
  purpleToBlue: string
  purpleToPink: string
  redToYellow: string
  tealToLime: string
}

/**
 * Defines the possible heading levels for Keep components.
 */
export type KeepHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * A type that represents a custom Keep theme.
 * It is a partial object of the `KeepTheme` type.
 */
export type CustomKeepTheme = DeepPartial<KeepTheme>;


/**
 * Defines the interface for the KeepTheme object which contains the theme configuration for various components used in the Keep React application.
 * @interface KeepTheme
 * @property {keepAlertTheme} alert - The theme configuration for the alert component.
 * @property {keepAvatarTheme} avatar - The theme configuration for the avatar component.
 * @property {keepAccordionTheme} accordion - The theme configuration for the accordion component.
 * @property {keepButtonTheme} button - The theme configuration for the button component.
 * @property {keepButtonGroupTheme} buttonGroup - The theme configuration for the button group component.
 * @property {keepBadgeTheme} badge - The theme configuration for the badge component.
 * @property {keepBreadCrumbTheme} breadcrumb - The theme configuration for the breadcrumb component.
 * @property {KeepCardTheme} card - The theme configuration for the card component.
 * @property {KeepCarouselTheme} carousel - The theme configuration for the carousel component.
 * @property {keepDropdownTheme} dropdown - The theme configuration for the dropdown component.
 * @property {keepProgressTheme} progress - The theme configuration for the progress component.
 * @property {keepPopoverTheme} popover - The theme configuration for the popover component.
 * @property {keepPaginationTheme} pagination - The theme configuration for the pagination component.
 * @property {KeepNavigationTheme} navigation - The theme configuration for the navigation component.
 * @property {keepNotificationTheme} notification - The theme configuration for the notification component.
 * @property {keepFloatingTheme} tooltip - The theme configuration for the tooltip component.
 * @property {keepModalTheme} modal - The theme configuration for the modal component.
 * @property {keepRatingTheme} rating - The theme configuration for the rating component.
 * @property {KeepSpinnerTheme} spinner - The theme configuration for the spinner component.
 * @property {keepTabTheme} tabs - The theme configuration for the tabs component.
 * @property {KeepSidebarTheme} sidebar - The theme configuration for the sidebar component.
 * @property {keepToggleTheme} switch - The theme configuration for the switch component.
 * @property {keepSkeletonTheme} skeleton - The theme configuration for the skeleton component.
 * @property {keepTagTheme} tag - The theme configuration for the tag component.
 * @property {keepTableTheme} table - The theme configuration for the table component.
 * @property {keepTimelineTheme} timeline - The theme configuration for the timeline component.
 * @property {keepEmptyTheme} empty - The theme configuration for the empty component.
 * @property {keepStatisticTheme} statistic - The theme configuration for the statistic component.
 * @property {keepUploadTheme} upload - The theme configuration for the upload component.
 * @property {keepCheckboxTheme} checkbox - The theme configuration for the checkbox component.
 * @property {keepFormControlTheme} formControls - The theme configuration for the form controls.
 * @property {keepCheckboxGroupTheme} checkboxGroup - The theme configuration for the checkbox group component.
 * @property {keepTreeTheme} tree - The theme configuration for the tree component.
 * @property {KeepStepTheme} step - The theme configuration for the step component.
 */
export interface KeepTheme {
  alert: keepAlertTheme
  avatar: keepAvatarTheme
  accordion: keepAccordionTheme
  button: keepButtonTheme
  buttonGroup: keepButtonGroupTheme
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
