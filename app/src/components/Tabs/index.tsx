/* eslint-disable no-unused-vars */
import type { ComponentProps, ForwardedRef, KeyboardEvent, PropsWithChildren, ReactElement } from 'react'
import { Children, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import type { TabItemProps } from './TabItem'
import { TabItem } from './TabItem'
import { TabStyleItemProps, TabStyles, tabTheme } from './theme'

export interface TabEventProps {
  target: number
}

export interface TabKeyboardEventProps extends TabEventProps {
  event: KeyboardEvent<HTMLButtonElement>
}

export type TabStyleItem<Type> = {
  [K in keyof Type]: TabStyleItemProps
}

export type TabItemStatus = 'active' | 'notActive'

/**
 * Represents the event object for tab events.
 * @interface TabEventProps
 */

/**
 * Props for the Tabs component.
 * @interface TabsProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'div'>, 'style' | 'ref'>>}
 */
export interface TabsProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style' | 'ref'>> {
  /**
   * The style of the tabs.
   * @type {keyof TabStyles}
   * @default 'default'
   */
  style?: keyof TabStyles
  /**
   * The position of the icon relative to the tab label.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'
  /**
   * The position of the tab border.
   * @type {'top' | 'bottom'}
   * @default 'bottom'
   */
  borderPosition?: 'top' | 'bottom'
  /**
   * Callback function triggered when the active tab changes.
   * @param activeTab - The index of the active tab.
   */
  onActiveTabChange?: (activeTab: number) => void
}

export interface TabsRef {
  setActiveTab: (activeTab: number) => void
}
const TabsComponent = forwardRef<TabsRef, TabsProps>(
  (
    {
      children,
      style = 'default',
      iconPosition = 'left',
      borderPosition = 'bottom',
      className,
      onActiveTabChange,
      ...rest
    },
    ref: ForwardedRef<TabsRef>,
  ) => {
    const theme = tabTheme

    const tabs = useMemo(
      () => Children.map(children as ReactElement<PropsWithChildren<TabItemProps>>[], ({ props }) => props),
      [children],
    )

    const tabRefs = useRef<HTMLButtonElement[]>([])
    const [activeTab, setActiveTab] = useState(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active),
      ),
    )
    const [focusedTab, setFocusedTab] = useState(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active),
      ),
    )

    const setActiveTabWithCallback = (activeTab: number) => {
      setActiveTab(activeTab)
      if (onActiveTabChange) onActiveTabChange(activeTab)
    }

    const handleClick = ({ target }: TabEventProps): void => {
      setActiveTabWithCallback(target)
      setFocusedTab(target)
    }

    const handleKeyboard = ({ event, target }: TabKeyboardEventProps): void => {
      if (event.key === 'ArrowLeft') {
        setFocusedTab(Math.max(0, focusedTab - 1))
      }

      if (event.key === 'ArrowRight') {
        setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1))
      }

      if (event.key === 'Enter') {
        setActiveTabWithCallback(target)
        setFocusedTab(target)
      }
    }

    const tabItemStyle = theme.tabList.tabItem.styles[style]

    useEffect(() => {
      tabRefs.current[focusedTab]?.focus()
    }, [focusedTab])

    useImperativeHandle(ref, () => ({
      setActiveTab: setActiveTabWithCallback,
    }))

    return (
      <div className={cn(theme.base, className)}>
        <div
          aria-label="Tabs"
          role="tablist"
          className={cn(
            theme.tabList.base,

            style !== 'pills' && theme.tabList.borderPosition[borderPosition],
            className,
          )}
          {...rest}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              aria-controls={`${index + 1}-tabpanel-${index}`}
              aria-selected={index === activeTab}
              className={cn(
                theme.tabList.tabItem.base,
                tabItemStyle.base,
                index === activeTab && tabItemStyle.active.on,
                index !== activeTab && !tab.disabled && tabItemStyle.active.off,
                borderPosition === 'top' && index === activeTab && tabItemStyle.borderPosition.top,
                borderPosition === 'bottom' && index === activeTab && tabItemStyle.borderPosition.bottom,
              )}
              disabled={tab.disabled}
              id={`${index + 1}-tab-${index}`}
              onClick={() => handleClick({ target: index })}
              onKeyDown={(event) => handleKeyboard({ event, target: index })}
              role="tab"
              tabIndex={index === focusedTab ? 0 : -1}>
              {tab.icon && iconPosition === 'left' && (
                <span className={theme.tabList.tabItem.icon.left}>{tab.icon}</span>
              )}
              {tab.title}
              {tab.icon && iconPosition === 'right' && (
                <span className={theme.tabList.tabItem.icon.right}>{tab.icon}</span>
              )}
              {tab.notification && (
                <span
                  className={cn(
                    theme.tabList.tabItem.notification.base,
                    tab.notificationColor &&
                      theme.tabList.tabItem.notification.notificationColor[tab.notificationColor],
                    !tab.notificationColor && theme.tabList.tabItem.notification.notificationColor['info'],
                    typeof tab.notification === 'string' && theme.tabList.tabItem.notification.type.text,
                    typeof tab.notification === 'number' && theme.tabList.tabItem.notification.type.number,
                  )}>
                  {tab.notification}
                </span>
              )}
            </button>
          ))}
        </div>
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              aria-labelledby={`${index + 1}-tab-${index}`}
              className={theme.tabPanel}
              hidden={index !== activeTab}
              id={`${index + 1}-tabpanel-${index}`}
              role="tabpanel"
              tabIndex={0}>
              {tab.children}
            </div>
          ))}
        </div>
      </div>
    )
  },
)
TabsComponent.displayName = 'Tabs'
TabItem.displayName = 'Tabs.Item'
export const Tabs = Object.assign(TabsComponent, { Item: TabItem })
