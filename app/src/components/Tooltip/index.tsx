'use client'
import { Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import { TooltipArrow } from './TooltipArrow'
import { TooltipContent } from './TooltipContent'

const TooltipProvider = Provider
const Tooltip = Root
const TooltipAction = Trigger

export { Tooltip, TooltipAction, TooltipArrow, TooltipContent, TooltipProvider }
