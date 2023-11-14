import { twMerge } from 'tailwind-merge'
import type { ComponentProps, ForwardedRef, KeyboardEvent, PropsWithChildren, ReactElement } from 'react'
import { Children, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import type { TabItemProps } from './TabItem'
import { TabItem } from './TabItem'
import { KeepBoolean, KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepTabTheme {
  base: string
  tabList: {
    base: string
    styles: TabStyles
    borderPosition: {
      top: string
      bottom: string
    }
    tabItem: {
      base: string
      styles: TabStyleItem<TabStyles>
      icon: {
        left: string
        right: string
      }
      notification: {
        base: string
        type: {
          number: string
          text: string
        }
        notificationColor: TabNotificationColors
      }
    }
  }
  tabPanel: string
}
export interface TabStyles {
  default: string
  underline: string
  pills: string
  fullWidth: string
}
export interface BorderPosition {
  top: string
  bottom: string
}
export interface TabStyleItemProps {
  base: string
  active: KeepBoolean
  borderPosition: BorderPosition
}
export type TabStyleItem<Type> = {
  [K in keyof Type]: TabStyleItemProps
}
export type TabItemStatus = 'active' | 'notActive'

interface TabEventProps {
  target: number
}
interface TabKeyboardEventProps extends TabEventProps {
  event: KeyboardEvent<HTMLButtonElement>
}
export interface TabNotificationColors extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}
export interface TabsProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style' | 'ref'>> {
  style?: keyof TabStyles
  iconPosition?: 'left' | 'right'
  borderPosition?: 'top' | 'bottom'
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
    const theme = useTheme().theme.tabs

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
      <div className={twMerge(theme.base, className)}>
        <div
          aria-label="Tabs"
          role="tablist"
          className={twMerge(
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
              className={twMerge(
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
                  className={twMerge(
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
