'use client'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { cn } from '../../helpers/cn'
import { windowExists } from '../../helpers/window-exists'
import { IndicatorsType, IndicatorsTypeColors, carouselTheme } from './theme'

/**
 * Props for the Carousel component.
 * @interface CarouselProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Determines whether to show indicators for the carousel slides.
   * @type {boolean}
   * @default false
   */
  indicators?: boolean

  /**
   * Determines whether to show controls for navigating the carousel.
   * @type {boolean}
   * @default false
   */
  showControls?: boolean

  /**
   * The custom component to be used as the left control for the carousel.
   * @type {ReactNode}
   * @default "<DefaultLeftControl />"
   */
  leftControl?: ReactNode

  /**
   * The custom component to be used as the right control for the carousel.
   * @type {ReactNode}
   * @default "<DefaultRightControl />"
   */
  rightControl?: ReactNode

  /**
   * The children elements to be rendered as carousel slides.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Determines whether the carousel should slide automatically.
   * @type {boolean}
   * @default true
   */
  slide?: boolean

  /**
   * The interval (in milliseconds) between each slide transition.
   * @type {number}
   * @default 3000 (3 seconds)
   */
  slideInterval?: number

  /**
   * The type of indicators to be displayed for the carousel slides.
   * @type {IndicatorsType}
   * @default 'dot'
   */
  indicatorsType?: IndicatorsType

  /**
   * The color scheme for the indicators.
   * @type {keyof IndicatorsTypeColors}
   * @default 'white'
   */
  indicatorsTypeColors?: keyof IndicatorsTypeColors

  /**
   * Additional CSS class name(s) for the carousel component.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = false,
  showControls = false,
  leftControl,
  rightControl,
  slide = true,
  slideInterval,
  indicatorsType = 'dot',
  indicatorsTypeColors = 'white',
  className,
  ...props
}): ReactElement => {
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1

  const carouselContainer = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const theme = carouselTheme

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: cn(theme.item.base, child.props.className),
        }),
      ),
    [children, theme.item.base],
  )

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items) return
      item = (item + items.length) % items.length
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item
      }
      setActiveItem(item)
    },
    [items],
  )

  useEffect(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth))
    }
  }, [isDragging])

  useEffect(() => {
    if (slide) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000)

      return () => clearInterval(intervalId)
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval])

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging)

  return (
    <div className={cn(theme.base, className)} data-testid="carousel" {...props}>
      <ScrollContainer
        className={cn(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap)}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(true)}
        vertical={false}>
        {items?.map(
          (item, index): ReactElement => (
            <div
              key={index}
              className={theme.item.wrapper}
              data-active={activeItem === index}
              data-testid="carousel-item">
              {item}
            </div>
          ),
        )}
      </ScrollContainer>
      {indicators && (
        <div className={theme.indicators.wrapper}>
          {items?.map(
            (_, index): ReactElement => (
              <button
                key={index}
                className={cn(
                  theme.indicators.base,
                  theme.indicators.type[indicatorsType],
                  index === activeItem && theme.indicators.active.on.type[indicatorsType],
                  index === activeItem && theme.indicators.active.on.color[indicatorsTypeColors],
                  index !== activeItem && theme.indicators.active.off.color[indicatorsTypeColors],
                )}
                onClick={navigateTo(index)}
                data-testid="carousel-indicator"
              />
            ),
          )}
        </div>
      )}
      {items && showControls && (
        <>
          <div className={theme.leftControl}>
            <button
              className="group"
              data-testid="carousel-left-control"
              onClick={navigateTo(activeItem - 1)}
              type="button">
              {leftControl ? leftControl : <DefaultLeftControl />}
            </button>
          </div>
          <div className={theme.rightControl}>
            <button
              className="group"
              data-testid="carousel-right-control"
              onClick={navigateTo(activeItem + 1)}
              type="button">
              {rightControl ? rightControl : <DefaultRightControl />}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const DefaultLeftControl: FC = () => {
  const theme = carouselTheme
  return (
    <span className={theme.control.base}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
        <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
      </svg>
    </span>
  )
}

const DefaultRightControl: FC = () => {
  const theme = carouselTheme
  return (
    <span className={theme.control.base}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
        <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
      </svg>
    </span>
  )
}
