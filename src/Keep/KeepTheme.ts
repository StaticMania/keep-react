import { keepAccordionTheme } from "../components/Accordion";
import { keepAlertTheme } from "../components/Alert";
import { keepAvatarTheme } from "../components/Avatar/Avatar";
import { keepBadgeTheme } from "../components/Badge";
import { keepBreadCrumbTheme } from "../components/Breadcrumb";
import { keepButtonTheme } from "../components/Button";
import { keepButtonGroupTheme } from "../components/Button/ButtonGroup";
import { KeepCardTheme } from "../components/Card";
import { KeepCarouselTheme } from "../components/Carousel";
import { KeepFloatingTheme } from "../components/Floating";
import { keepNotificationTheme } from "../components/Notification";
import { keepProgressTheme } from "../components/Progress";
import { DeepPartial } from "../helpers/deep-partial";

export interface KeepCheckboxShape {
  circle: string;
  round: string;
}
export interface KeepShapes {
  square: string;
  round: string;
  roundSquare: string;
}

export interface KeepPositions {
  "bottom-left": string;
  "bottom-right": string;
  "bottom-center": string;
  "top-left": string;
  "top-center": string;
  "top-right": string;
  "center-left": string;
  center: string;
  "center-right": string;
}

export interface KeepSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
}

export interface KeepButtonType {
  primary: string;
  outlineGray: string;
  outlinePrimary: string;
  dashed: string;
  text: string;
  linkPrimary: string;
  linkGray: string;
  default: string;
}

export interface KeepBoolean {
  off: string;
  on: string;
}

export interface KeepStateColors {
  info: string;
  error: string;
  success: string;
  warning: string;
}

export interface KeepColors extends KeepStateColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface KeepGradientColors extends Omit<KeepStateColors, "warning"> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export interface KeepGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type KeepHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type CustomKeepTheme = DeepPartial<KeepTheme>;

export interface KeepTheme {
  alert: keepAlertTheme;
  avatar: keepAvatarTheme;
  accordion: keepAccordionTheme;
  button: keepButtonTheme;
  buttonGroup: keepButtonGroupTheme;
  badge: keepBadgeTheme;
  breadcrumb: keepBreadCrumbTheme;
  card: KeepCardTheme;
  carousel: KeepCarouselTheme;
  progress: keepProgressTheme;
  notification: keepNotificationTheme;
  tooltip: KeepFloatingTheme;
}
