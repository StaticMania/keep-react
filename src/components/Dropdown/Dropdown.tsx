import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import type { Dispatch, FC, PropsWithChildren, ReactElement, ReactNode, SetStateAction } from 'react'
import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DeepPartial } from '../../helpers/deep-partial'
import { uuid } from '../../helpers/uuid'
import { useTheme } from '../../Keep/ThemeContext'
import type { ButtonProps } from '../Button/Button'
import { Button } from '../Button/Button'
import { Floating, FloatingProps, keepFloatingTheme } from '../Floating'
import type { keepDropdownDividerTheme } from './DropdownDivider'
import { DropdownDivider } from './DropdownDivider'
import type { keepDropdownHeaderTheme } from './DropdownHeader'
import { DropdownHeader } from './DropdownHeader'
import { DropdownItem, keepDropdownItemTheme } from './DropdownItem'

export interface keepDropdownFloatingTheme
  extends keepFloatingTheme,
    keepDropdownDividerTheme,
    keepDropdownHeaderTheme {
  item: keepDropdownItemTheme
}

export interface keepDropdownTheme {
  floating: keepDropdownFloatingTheme
  content: string
  arrowIcon: string
}

/**
 * Props for the Dropdown component.
 * @interface DropdownProps
 * @extends {PropsWithChildren}
 * @extends {Pick<FloatingProps, 'placement' | 'trigger'>}
 * @extends {Omit<ButtonProps, 'theme'>}
 */
export interface DropdownProps
  extends PropsWithChildren,
    Pick<FloatingProps, 'placement' | 'trigger'>,
    Omit<ButtonProps, 'theme'> {
  /**
   * Determines whether to show the arrow icon.
   * @type {boolean}
   * @default true
   */
  arrowIcon?: boolean

  /**
   * Determines whether the dropdown should be dismissed when clicked.
   * @type {boolean}
   * @default true
   */
  dismissOnClick?: boolean

  /**
   * Determines whether to show a floating arrow.
   * @type {boolean}
   * @default false
   */
  floatingArrow?: boolean

  /**
   * The label for the dropdown.
   * @type {ReactNode}
   * @default ''
   */
  label: ReactNode

  /**
   * The theme for the dropdown.
   * @type {DeepPartial<keepDropdownTheme>}
   * @default {}
   */
  theme?: DeepPartial<keepDropdownTheme>
}

/**
 * Props for the TriggerWrapper component.
 * @interface TriggerWrapperProps
 * @extends {ButtonProps}
 */
export interface TriggerWrapperProps extends ButtonProps {
  setButtonWidth?: Dispatch<SetStateAction<number | undefined>>
}

type Icons = Record<string, ReactNode>

const icons: Icons = {
  top: <CaretUp size={18} />,
  right: <CaretRight size={18} />,
  bottom: <CaretDown size={18} />,
  left: <CaretLeft size={18} />,
}

const DropdownComponent: FC<DropdownProps> = ({ children, dismissOnClick = true, ...props }) => {
  const theme = useTheme().theme.dropdown
  const theirProps = props as Omit<DropdownProps, 'theme'>
  const {
    placement = 'bottom-start',
    trigger = 'click',
    label,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps

  const Icon = useMemo(() => {
    const [p] = placement.split('-')
    return icons[p] ?? <CaretDown size={18} />
  }, [placement])

  const [closeRequestKey, setCloseRequestKey] = useState<string | undefined>(undefined)
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined)

  /**
   * Attaches a close listener to the provided React node.
   * If the node is a DropdownItem, it clones the node and adds an onClick handler
   * that triggers the original onClick function and updates the close request key.
   * If the node has children, it recursively attaches the close listener to each child.
   * @param node - The React node to attach the close listener to.
   * @returns The updated React node with the close listener attached.
   */
  const attachCloseListener = useCallback(
    // @ts-ignore TODO: Rewrite Dropdown
    (node: ReactNode) => {
      if (!React.isValidElement(node)) return node
      if ((node as ReactElement).type === DropdownItem)
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          onClick: () => {
            node.props.onClick?.()
            dismissOnClick && setCloseRequestKey(uuid())
          },
        })
      if (node.props.children && typeof node.props.children === 'object') {
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          children: Children.map(node.props.children, attachCloseListener),
        })
      }
      return node
    },
    [dismissOnClick],
  )

  const content = useMemo(
    () => <ul className={theme.content}>{Children.map(children, attachCloseListener)}</ul>,
    [attachCloseListener, children, theme.content],
  )

  const TriggerWrapper: FC<TriggerWrapperProps> = ({ children, setButtonWidth }): JSX.Element => {
    const ref = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
      if (ref.current) setButtonWidth?.(ref.current.clientWidth)
    }, [ref, setButtonWidth])

    return (
      <Button {...buttonProps} ref={ref}>
        {children}
      </Button>
    )
  }

  return (
    <Floating
      content={content}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={floatingArrow}
      trigger={trigger}
      theme={theme.floating}
      minWidth={buttonWidth}
      closeRequestKey={closeRequestKey}>
      <TriggerWrapper setButtonWidth={setButtonWidth}>
        {label}
        <span className="ml-1">{arrowIcon && Icon}</span>
      </TriggerWrapper>
    </Floating>
  )
}

DropdownComponent.displayName = 'Dropdown'
DropdownItem.displayName = 'Dropdown.Item'
DropdownHeader.displayName = 'Dropdown.Header'
DropdownDivider.displayName = 'Dropdown.Divider'

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
})
