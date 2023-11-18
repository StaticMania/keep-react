/**
 * Carousel component that displays a scrollable list of items with optional indicators and controls.
 *
 * @component
 * @example
 * ```tsx
 * <Carousel indicators showControls>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Carousel>
 * ```
 *
 * @returns {JSX.Element} The rendered Carousel component.
 */
import { CaretLeft, CaretRight } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { windowExists } from '../../helpers/window-exists'
import { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme configuration for the KeepCarousel component.
 */
export interface KeepCarouselTheme {
  base: string
  indicators: {
    active: {
      off: {
        base: string
        color: IndicatorsTypeColors
      }
      on: {
        base: string
        type: {
          dot: string
          ring: string
          bar: string
          square: string
          squareRing: string
        }
        color: IndicatorsTypeColors
      }
    }
    base: string
    wrapper: string
    type: {
      dot: string
      ring: string
      bar: string
      square: string
      squareRing: string
    }
  }
  item: {
    base: string
    wrapper: string
  }
  control: {
    base: string
    icon: string
  }
  leftControl: string
  rightControl: string
  scrollContainer: {
    base: string
    snap: string
  }
}

/**
 * Represents the type of indicators for the Carousel component.
 * Possible values are: 'dot', 'ring', 'bar', 'square', 'squareRing'.
 * @see IndicatorsTypeColors
 */
export type IndicatorsType = 'dot' | 'ring' | 'bar' | 'square' | 'squareRing'

/**
 * Interface for defining the colors of indicators in the Carousel component.
 * The keys of this interface are the possible values of the IndicatorsType type.
 * The values of this interface are the possible values of the KeepColors type.
 * @see IndicatorsType
 * @see KeepColors
 */
export interface IndicatorsTypeColors extends Pick<KeepColors, 'white' | 'slate'> {
  [key: string]: string
}

/**
 * Props for the Carousel component.
 */
export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Determines whether indicators should be displayed.
   */
  indicators?: boolean
  /**
   * Determines whether controls should be displayed.
   */
  showControls?: boolean
  /**
   * The custom component to be used as the left control.
   */
  leftControl?: ReactNode
  /**
   * The custom component to be used as the right control.
   */
  rightControl?: ReactNode
  /**
   * The children components of the Carousel.
   */
  children?: ReactNode
  /**
   * Determines whether the Carousel should slide.
   */
  slide?: boolean
  /**
   * The interval (in milliseconds) between each slide transition.
   */
  slideInterval?: number
  /**
   * The type of indicators to be displayed.
   */
  indicatorsType?: IndicatorsType
  /**
   * The color scheme for the indicators.
   */
  indicatorsTypeColors?: keyof IndicatorsTypeColors
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
}): JSX.Element => {
  /**
   * Indicates whether the device is a mobile device.
   * @returns {boolean} True if the device is a mobile device, false otherwise.
   */
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1

  const carouselContainer = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const theme = useTheme().theme.carousel

  /**
   * The list of items in the Carousel component.
   * Each item is a React element with an optional className prop.
   * @see CarouselProps
   */
  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: cn(theme.item.base, child.props.className),
        }),
      ),
    [children, theme.item.base],
  )

  /**
   * Navigates to the specified item in the carousel.
   * @param item - The index of the item to navigate to.
   * @returns A function that navigates to the specified item in the carousel.
   * @see items
   */
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

  /**
   * Sets the active item in the carousel when the user scrolls.
   * @see activeItem
   */
  useEffect(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth))
    }
  }, [isDragging])

  useEffect(() => {
    if (slide) {
      /**
       * The ID of the interval used for automatic sliding in the carousel.
       * @see slideInterval
       */
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000)

      return () => clearInterval(intervalId)
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval])

  /**
   * Handles the dragging state of the carousel.
   * @param dragging - A boolean value indicating whether dragging is happening or not.
   */
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
          (item, index): JSX.Element => (
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
            (_, index): JSX.Element => (
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

/**
 * Default left control icon for the Carousel component.
 * @see Carousel
 * @see CarouselProps
 * @returns A default left control icon for the Carousel component.
 */

const DefaultLeftControl: FC = () => {
  const theme = useTheme().theme.carousel
  return (
    <span className={theme.control.base}>
      <CaretLeft size={20} weight="bold" color="white" />
    </span>
  )
}

/**
 * Default right control icon for the Carousel component.
 * @see Carousel
 * @see CarouselProps
 * @returns A default right control icon for the Carousel component.
 */
const DefaultRightControl: FC = () => {
  const theme = useTheme().theme.carousel
  return (
    <span className={theme.control.base}>
      <CaretRight size={20} weight="bold" color="white" />
    </span>
  )
}
