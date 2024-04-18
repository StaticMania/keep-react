import {
  Placement,
  arrow,
  autoPlacement,
  offset,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { createContext, useContext, useMemo, useRef, useState } from 'react'

export interface TooltipOptions {
  initialOpen?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

export function useTooltip({ initialOpen = false, placement = 'top', trigger = 'hover' }: TooltipOptions) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(initialOpen)

  const data = useFloating({
    placement: placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(9 + 2),
      autoPlacement({
        alignment: 'start',
        allowedPlacements: ['top', 'left', 'bottom', 'right'],
      }),
    ],
  })

  const context = data.context

  const hover = useHover(context, {
    enabled: trigger === 'hover',
    handleClose: safePolygon(),
  })
  const focus = useFocus(context, { enabled: trigger === 'focus' })
  const click = useClick(context, { enabled: trigger === 'click' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([focus, click, hover, role, dismiss])

  return useMemo(() => ({ ...interactions, ...data, context, isOpen, arrowRef }), [interactions, data, isOpen, context])
}

type ContextType = ReturnType<typeof useTooltip> | null

export const TooltipContext = createContext<ContextType>(null)

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
