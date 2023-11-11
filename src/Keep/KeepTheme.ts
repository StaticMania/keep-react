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
 * An object that defines the shapes of the KeepCheckbox component.
 * The KeepCheckbox component supports two shapes: circle and round.
 * 
 * @interface KeepCheckboxShape
 */

export interface KeepCheckboxShape {
  /**
   * The shape of the component is circle.
   */
  circle: string
  /**
   * The shape of the component is round.
   */
  round: string
}

/**
 * An object that defines the shapes of the Keep component.
 * The Keep component supports three shapes: square, round, and circle.
 * 
 * @interface KeepShapes
 */

export interface KeepShapes {
  /**
   * The shape of the component is square.
   */
  square: string
  /**
   * The shape of the component is round.
   */
  round: string
  /**
   * The shape of the component is circle.
   */
  roundSquare: string
}

/**
 * An object that defines the positions of the Keep component.
 * Each property represents a position and its value is a CSS string that defines the position.
 * @interface KeepPositions
 */

export interface KeepPositions {
  /** 
   * The position at the bottom-left corner of the screen. 
   */
  'bottom-left': string
  /**
   * The position at the bottom-right corner of the screen.
   */
  'bottom-right': string
  /**
   * The position at the bottom-center of the screen.
   */
  'bottom-center': string
  /**
   * The position at the top-left corner of the screen.
   */
  'top-left': string
  /**
   * The position at the top-center of the screen.
   */
  'top-center': string
  /**
   * The position at the top-right corner of the screen.
   */
  'top-right': string
  /**
   * The position at the center-left of the screen.
   */
  'center-left': string
  /**
   * The position at the center of the screen.
   */
  center: string
  /**
   * The position at the center-right of the screen.
   */
  'center-right': string
}

/**
 * Defines the sizes available for Keep components.
 * 
 * @interface KeepSizes 
 * 
 * @type {{ xs, sm, md, lg, xl, '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'}}
 */
export interface KeepSizes {
  xs: string // Extra small size
  sm: string // Small size
  md: string // Medium size
  lg: string // Large size
  xl: string // Extra large size
  '2xl': string // 2 times extra large size
  '3xl': string // 3 times extra large size
  '4xl': string // 4 times extra large size
  '5xl': string // 5 times extra large size
  '6xl': string // 6 times extra large size
  '7xl': string // 7 times extra large size
}

/**
 * Defines the types of buttons available in the Keep app.
 * 
 * @interface KeepButtonType
 * 
 * The following button types are available:
 * - primary: A primary button.
 * - outlineGray: A gray outline button.
 * - outlinePrimary: A primary outline button.
 * - dashed: A dashed button.
 * - text: A text button.
 * - linkPrimary: A primary link button.
 * - linkGray: A gray link button.
 * - default: A default button.
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
 * Defines the types of boolean values used in the Keep app.
 * with the following values:
 * - off: The boolean value is false.
 * - on: The boolean value is true.
 * 
 * @interface KeepBoolean
 * 
 * @type {{ off: string, on: string }}
 */

export interface KeepBoolean {
  off: string
  on: string
}

/**
 * Interface for defining the colors used in the KeepState component.
 * @remarks
 * These colors are used to represent different states of the component, such as info, error, success, and warning.
 * 
 * @public
 * 
 * @type {{ [key: string]: string }}
 */
export interface KeepStateColors {
  info: string
  error: string
  success: string
  warning: string
}

/**
 * Interface for defining the colors used in the Keep app.
 *
 * @remarks
 * This interface extends the `KeepStateColors` interface and defines additional color properties.
 *
 * @public
 * 
 * @type {{ [key: string]; blue; cyan; dark; gray; green; indigo; light; lime; pink; purple; red; teal; yellow }}
 * 
 * @extends KeepStateColors
 * 
 * @example
 * 
 * ```tsx
 * import { KeepColors } from '..'
 * 
 * const colors: KeepColors = {
 *  info: '#1e90ff',
 *  error: '#ff0000',
 *  success: '#008000',
 *  warning: '#ffa500',
 *  blue: '#1e90ff',
 *  cyan: '#00ffff',
 *  dark: '#000000',
 *  gray: '#808080',
 *  green: '#008000',
 *  indigo: '#4b0082',
 *  light: '#f5f5f5',
 *  lime: '#00ff00',
 *  pink: '#ffc0cb',
 *  purple: '#800080',
 *  red: '#ff0000',
 *  teal: '#008080',
 *  yellow: '#ffff00',
 * }
 * ```
 */
export interface KeepColors extends KeepStateColors {
  /**
   * Additional color properties can be defined using string keys.
   */
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
 * @extends Omit<KeepStateColors, 'warning'>
 */
export interface KeepGradientColors extends Omit<KeepStateColors, 'warning'> {
  [key: string]: string
  cyan: string
  lime: string
  pink: string
  purple: string
  teal: string
}

/**
 * Defines a set of gradient duo-tone colors used in the Keep app.
 * Each color is represented as a string in the format "#RRGGBB".
 * 
 * @remarks
 * The following color pairs are available:
 * - cyanToBlue: A gradient from cyan to blue.
 * - greenToBlue: A gradient from green to blue.
 * - pinkToOrange: A gradient from pink to orange.
 * - purpleToBlue: A gradient from purple to blue.
 * - purpleToPink: A gradient from purple to pink.
 * - redToYellow: A gradient from red to yellow.
 * - tealToLime: A gradient from teal to lime.
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
 * Defines the interface for heading levels used in the Keep app.
 * 
 * @interface KeepHeadingLevel
 * 
 * @type {{ h1, h2, h3, h4, h5, h6 }}
 * 
 * @remarks
 * The following heading levels are available:
 * - h1: Heading level 1.
 * - h2: Heading level 2.
 * - h3: Heading level 3.
 * - h4: Heading level 4.
 * - h5: Heading level 5.
 * - h6: Heading level 6.
 * 
 * @example
 * 
 * ```tsx
 * import { KeepHeadingLevel } from '..'
 * 
 * const headingLevel: KeepHeadingLevel = 'h1'
 * ```
 */

export type KeepHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type CustomKeepTheme = DeepPartial<KeepTheme>

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
