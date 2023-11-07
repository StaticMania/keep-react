import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import type { KeepStateColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'

export interface keepLavelTheme {
  base: string
  colors: LabelColors
  disabled: string
}

export interface LabelColors extends KeepStateColors {
  [key: string]: string
  default: string
}

export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'className' | 'color'>> {
  color?: keyof LabelColors
  value?: string
  disabled?: boolean
  htmlFor?: string
}

export const Label: FC<LabelProps> = ({
  children,
  color = 'default',
  disabled = false,
  htmlFor,
  value,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.formControls.label
  const theirProps = excludeClassName(props)
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(theme.base, theme.colors[color], disabled && theme.disabled)}
      {...theirProps}>
      {value ?? children ?? ''}
    </label>
  )
}
