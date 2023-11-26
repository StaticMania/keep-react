import {
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useTransitionStyles,
  FloatingArrow,
  arrow,
  autoPlacement,
  hide,
} from '@floating-ui/react'
import { XCircle } from 'phosphor-react'
import { FC, useRef, useState } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the Popover component.
 * @interface PopoverProps
 */
interface PopoverProps {
  /**
   * Specifies the trigger event for the popover.
   * - 'hover': Popover is triggered on hover.
   * - 'click': Popover is triggered on click.
   */
  trigger?: 'hover' | 'click'

  /**
   * The content of the popover.
   */
  children: React.ReactNode

  /**
   * Additional content to be displayed within the popover.
   */
  additionalContent?: React.ReactNode

  /**
   * The title of the popover.
   */
  title?: string

  /**
   * The description of the popover.
   */
  description?: string

  /**
   * The icon to be displayed within the popover.
   */
  icon?: React.ReactNode

  /**
   * Additional CSS class name(s) for the popover.
   */
  className?: string

  /**
   * Specifies whether to show the dismiss icon in the popover.
   */
  showDismissIcon?: boolean

  /**
   * Specifies whether to show the arrow in the popover.
   */
  showArrow?: boolean

  /**
   * The position of the popover.
   * - 'top': Popover is positioned at the top.
   * - 'top-end': Popover is positioned at the top-end.
   * - 'top-start': Popover is positioned at the top-start.
   * - 'bottom': Popover is positioned at the bottom.
   * - 'bottom-end': Popover is positioned at the bottom-end.
   * - 'bottom-start': Popover is positioned at the bottom-start.
   * - 'left': Popover is positioned at the left.
   * - 'left-end': Popover is positioned at the left-end.
   * - 'left-start': Popover is positioned at the left-start.
   * - 'right': Popover is positioned at the right.
   * - 'right-end': Popover is positioned at the right-end.
   * - 'right-start': Popover is positioned at the right-start.
   */
  position?:
    | 'top'
    | 'top-end'
    | 'top-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
}

export interface keepPopoverTheme {
  target: string
  body: {
    base: string
    title: string
    description: string
  }
}

export const Popover: FC<PopoverProps> = ({
  trigger = 'click',
  children,
  title,
  description,
  icon,
  additionalContent: additionalContent,
  className,
  position = 'bottom-start',
  showDismissIcon = true,
  showArrow = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        crossAxis: true,
        alignment: 'start',
        allowedPlacements: ['top', 'right', 'bottom', 'left'],
      }),
      hide({
        strategy: 'escaped',
      }),
    ],
    whileElementsMounted: autoUpdate,
    placement: position,
  })
  const hover = useHover(context, {
    enabled: trigger === 'hover',
  })
  const click = useClick(context, {
    enabled: trigger === 'click',
  })
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const { styles } = useTransitionStyles(context, {
    duration: 300,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role, hover])

  const theme = useTheme().theme.popover

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className={theme.target} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
          className={cn(theme.body.base, className)}>
          {showArrow && <FloatingArrow ref={arrowRef} context={context} fill="#FFFFFf" />}
          {showDismissIcon && (
            <button onClick={() => setIsOpen(false)} className="absolute right-6 top-[25px]">
              {typeof icon !== 'undefined' ? icon : <XCircle size={24} color="#5E718D" weight="light" />}
            </button>
          )}
          {title && (
            <h2 role="keep-popover" className={theme.body.title}>
              {title}
            </h2>
          )}
          {description && <p className={theme.body.description}>{description}</p>}
          {typeof additionalContent !== 'undefined' && additionalContent}
        </div>
      )}
    </>
  )
}
