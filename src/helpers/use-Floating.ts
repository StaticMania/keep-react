import type { ElementProps, Placement, ReferenceType, UseRoleProps } from '@floating-ui/react'
import {
  autoUpdate,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'

import type { Dispatch, RefObject, SetStateAction } from 'react'

import { getMiddleware, getPlacement } from './floating'

/**
 * Defines the parameters for the useFloating hook.
 * @typedef {Object} UseBaseFloatingParams
 * @property {('auto' | Placement)} [placement='auto'] - The placement of the floating element.
 * @property {boolean} open - Whether the floating element is open or not.
 * @property {React.RefObject<HTMLDivElement>} [arrowRef] - The ref object for the arrow element.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setOpen - The function to set the open state of the floating element.
 */
export type UseBaseFloatingParams = {
  placement?: 'auto' | Placement
  open: boolean
  arrowRef?: RefObject<HTMLDivElement>
  setOpen: Dispatch<SetStateAction<boolean>>
}

/**
 * A hook that provides base floating functionality.
 * @template Type - The type of the reference element.
 * @param {UseBaseFloatingParams<Type>} params - The parameters for the hook.
 * @returns {UseFloatingReturnType<Type>} - The return type of the hook.
 */
export const useBaseFLoating = <Type extends ReferenceType>({
  open,
  arrowRef,
  placement = 'top',
  setOpen,
}: UseBaseFloatingParams) => {
  return useFloating<Type>({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef }),
  })
}

/**
 * Defines the parameters for the useFloating interactions.
 * @typedef {Object} UseFloatingInteractionsParams
 * @property {ReturnType<typeof useFloating>['context']} context - The context of the useFloating hook.
 * @property {'hover' | 'click'} [trigger] - The trigger type for the interaction.
 * @property {UseRoleProps['role']} [role] - The role of the element.
 * @property {ElementProps[]} [interactions] - The list of element properties for the interaction.
 */
export type UseFloatingInteractionsParams = {
  context: ReturnType<typeof useFloating>['context']
  trigger?: 'hover' | 'click'
  role?: UseRoleProps['role']
  interactions?: ElementProps[]
}

/**
 * A hook that provides floating interactions for a given context element.
 * @param context - The context element to attach the interactions to.
 * @param trigger - The trigger for the interactions. Can be either 'click' or 'hover'.
 * @param role - The ARIA role for the context element. Defaults to 'tooltip'.
 * @param interactions - Additional interactions to be added to the context element.
 * @returns An array of interaction hooks.
 */
export const useFloatingInteractions = ({
  context,
  trigger,
  role = 'tooltip',
  interactions = [],
}: UseFloatingInteractionsParams) => {
  return useInteractions([
    useClick(context, { enabled: trigger === 'click' }),
    useHover(context, {
      enabled: trigger === 'hover',
      handleClose: safePolygon(),
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions,
  ])
}
