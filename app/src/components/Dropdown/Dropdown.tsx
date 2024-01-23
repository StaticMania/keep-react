'use client'
import type { Dispatch, FC, PropsWithChildren, ReactElement, ReactNode, SetStateAction } from 'react'
import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DeepPartial } from '../../helpers/deep-partial'
import { uuid } from '../../helpers/uuid'
import type { ButtonProps } from '../Button/Button'
import { Button } from '../Button/Button'
import { Floating, FloatingProps } from '../Floating'
import { DropdownDivider } from './DropdownDivider'
import { DropdownHeader } from './DropdownHeader'
import { DropdownItem } from './DropdownItem'
import { dropdownTheme, keepDropdownTheme } from './theme'

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
  top: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
    </svg>
  ),
  right: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
    </svg>
  ),
  bottom: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  ),
  left: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
    </svg>
  ),
}

const DropdownComponent: FC<DropdownProps> = ({ children, dismissOnClick = true, ...props }) => {
  const theme = dropdownTheme
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
    return (
      icons[p] ?? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      )
    )
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

  const TriggerWrapper: FC<TriggerWrapperProps> = ({ children, setButtonWidth }): ReactElement => {
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
