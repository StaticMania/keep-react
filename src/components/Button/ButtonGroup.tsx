import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { Children, cloneElement, useMemo } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'
import type { ButtonProps } from './Button'
import { cn } from '../../helpers/cn'

/**
 * Interface for defining the theme of a button group.
 */
export interface keepButtonGroupTheme {
  base: string
  position: PositionInButtonGroup
}

/**
 * Props for the ButtonGroup component.
 * @typedef {Object} ButtonGroupProps
 * @property {React.ComponentProps<'div'>} children - The child elements to be rendered within the ButtonGroup.
 * @property {boolean} pill - Whether the buttons in the group should be pill-shaped.
 */
export type ButtonGroupProps = PropsWithChildren<ComponentProps<'div'> & Pick<ButtonProps, 'pill'>>

/**
 * Defines the possible positions of a button within a button group.
 */
export interface PositionInButtonGroup {
  none: string
  start: string
  middle: string
  end: string
}
/**
 * Renders a group of buttons.
 * @param {ButtonGroupProps} props - The props for the component.
 * @param {ReactNode} props.children - The child elements to render.
 * @param {boolean} props.pill - Whether the buttons should be pill-shaped.
 * @param {string} props.className - Additional class name(s) for the component.
 * @returns {JSX.Element} - The rendered component.
 */
export const ButtonGroup: FC<ButtonGroupProps> = ({ children, pill, className, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props)

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          pill,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, pill],
  )
  const theme = useTheme().theme.buttonGroup

  return (
    <div className={cn(theme.base, className)} role="group" {...theirProps}>
      {items}
    </div>
  )
}

ButtonGroup.displayName = 'Button.Group'
