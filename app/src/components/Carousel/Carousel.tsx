'use client'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '../../helpers/cn'
import { IndicatorsType, IndicatorsTypeColors, carouselTheme } from './theme'
import { useDotButton, usePrevNextButtons } from './hooks'

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
  indicatorsType = 'dot',
  indicatorsTypeColors = 'white',
  className,
  ...props
}): ReactElement => {
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

  const [emblaRef, emblaApi] = useEmblaCarousel({})
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={cn(theme.base, className)} data-testid="carousel" {...props} ref={emblaRef}>
      <div className={theme.scrollContainer.base}>
        {items?.map(
          (item, index): ReactElement => (
            <div
              key={index}
              className={theme.item.wrapper}
              data-active={selectedIndex === index}
              data-testid="carousel-item">
              {item}
            </div>
          ),
        )}
      </div>
      {indicators && (
        <div className={theme.indicators.wrapper}>
          {scrollSnaps?.map(
            (_, index): ReactElement => (
              <button
                key={index}
                className={cn(
                  theme.indicators.base,
                  theme.indicators.type[indicatorsType],
                  index === selectedIndex && theme.indicators.active.on.type[indicatorsType],
                  index === selectedIndex && theme.indicators.active.on.color[indicatorsTypeColors],
                  index !== selectedIndex && theme.indicators.active.off.color[indicatorsTypeColors],
                )}
                onClick={() => onDotButtonClick(index)}
                data-testid="carousel-indicator"
              />
            ),
          )}
        </div>
      )}
      {items && showControls && (
        <>
          <div className={theme.leftControl}>
            <button className="group" data-testid="carousel-left-control" onClick={onPrevButtonClick} type="button">
              {leftControl ? leftControl : <DefaultLeftControl />}
            </button>
          </div>
          <div className={theme.rightControl}>
            <button className="group" data-testid="carousel-right-control" onClick={onNextButtonClick} type="button">
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
