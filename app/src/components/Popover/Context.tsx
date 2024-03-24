'use client'
import {
  Placement,
  arrow,
  autoPlacement,
  autoUpdate,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { Dispatch, SetStateAction, createContext, useContext, useMemo, useRef, useState } from 'react'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  trigger?: boolean
  showArrow?: boolean
  onOpenChange?: () => void
}

export function usePopover({
  initialOpen = false,
  showArrow = true,
  placement = 'bottom',
  modal,
  trigger: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)
  const [labelId, setLabelId] = useState<string | undefined>()
  const [descriptionId, setDescriptionId] = useState<string | undefined>()
  const arrowRef = useRef(null)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(14),

      shift({ padding: 5 }),
      arrow({
        element: showArrow ? arrowRef : null,
      }),

      autoPlacement({
        alignment: 'start',
        allowedPlacements: ['top', 'right', 'bottom', 'left'],
      }),
    ],
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      arrowRef,
      showArrow,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId, showArrow],
  )
}

type ContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>
    })
  | null

export const PopoverContext = createContext<ContextType>(null)

export const usePopoverContext = () => {
  const context = useContext(PopoverContext)

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }

  return context
}
