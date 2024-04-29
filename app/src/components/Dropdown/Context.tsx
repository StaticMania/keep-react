'use client'
import {
  Placement,
  arrow,
  autoPlacement,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { createContext, useContext, useMemo, useRef, useState } from 'react'

export interface DropdownOptions {
  showArrow?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

export function useDropdown({ placement = 'bottom', trigger = 'hover', showArrow = true }: DropdownOptions) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        crossAxis: true,
        alignment: 'start',
        allowedPlacements: ['top', 'right', 'bottom', 'left'],
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const context = data.context

  const hover = useHover(context, {
    enabled: trigger === 'hover',
    handleClose: safePolygon(),
  })
  const focus = useFocus(context, { enabled: trigger === 'focus' })
  const click = useClick(context, { enabled: trigger === 'click' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })

  const interactions = useInteractions([focus, click, hover, role, dismiss])

  return useMemo(
    () => ({ ...interactions, ...data, context, isOpen, arrowRef, showArrow }),
    [interactions, data, isOpen, context, showArrow],
  )
}

type ContextType = ReturnType<typeof useDropdown> | null

export const DropdownContext = createContext<ContextType>(null)

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)

  if (context == null) {
    throw new Error('Dropdown components must be wrapped in <Dropdown />')
  }

  return context
}
