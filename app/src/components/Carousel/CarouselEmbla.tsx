import { CaretLeft, CaretRight } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { windowExists } from '../../helpers/window-exists'
import { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
import { EmblaCarouselType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
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

export type IndicatorsType = 'dot' | 'ring' | 'bar' | 'square' | 'squareRing'

export interface IndicatorsTypeColors extends Pick<KeepColors, 'white' | 'slate'> {
  [key: string]: string
}

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

export const CarouselEmbla: FC<CarouselProps> = ({
  children,
  indicators = false,
  showControls = false,
  leftControl,
  rightControl,
  // slide = true,
  // slideInterval,
  indicatorsType = 'dot',
  indicatorsTypeColors = 'white',
  className,
  ...props
}): ReactElement => {
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1

  const carouselContainer = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState(0)
  const theme = useTheme().theme.carousel

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

  type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
  }

  const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
      if (!emblaApi) return

      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    }
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({})

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  console.log({ theme })

  return (
    <div className={`${cn(theme.base, className)}`} data-testid="carousel" {...props}>
      <div className={cn(theme.scrollContainer.base, isDeviceMobile && theme.scrollContainer.snap)} ref={emblaRef}>
        {items?.map(
          (item, index): ReactElement => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]  pl-4 "
              data-active={activeItem === index}
              data-testid="carousel-item">
              {item}
            </div>
          ),
        )}
      </div>
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
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
              type="button">
              {leftControl ? leftControl : <DefaultLeftControl />}
            </button>
          </div>
          <div className={theme.rightControl}>
            <button
              disabled={nextBtnDisabled}
              className="group"
              data-testid="carousel-right-control"
              onClick={onNextButtonClick}
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
  const theme = useTheme().theme.carousel
  return (
    <span className={theme.control.base}>
      <CaretLeft size={20} weight="bold" color="white" />
    </span>
  )
}

const DefaultRightControl: FC = () => {
  const theme = useTheme().theme.carousel
  return (
    <span className={theme.control.base}>
      <CaretRight size={20} weight="bold" color="white" />
    </span>
  )
}
