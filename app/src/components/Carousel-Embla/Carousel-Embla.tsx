'use client'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React, {
  CSSProperties,
  ComponentProps,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { cn } from '../../helpers/cn'

export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  children: ReactElement[]
  slidesPerView?: number
  indicators?: boolean
  indicatorsPosition?: 'top' | 'bottom' | 'left' | 'right'
  autoPlay?: boolean
  autoPlaySpeed?: number
  pauseAutoPlayOnMouseover?: boolean
  setCarousel?: Dispatch<SetStateAction<EmblaCarouselType | undefined>>
  gap?: number
  align?: 'start' | 'center' | 'end'
  axis?: 'x' | 'y'
  slidesToScroll?: number
  inViewThreshold?: number
  breakpoints?: {
    [key: string]: Omit<Partial<EmblaOptionsType>, 'breakpoints'>
  }
  dragFree?: boolean
  dragThreshold?: number
  loop?: boolean
  skipSnaps?: boolean
  duration?: number
  startIndex?: number
  className?: string
}

export const CarouselEmbla: FC<CarouselProps> = ({
  children,
  slidesPerView,
  indicators = true,
  indicatorsPosition = 'bottom',
  autoPlay = false,
  autoPlaySpeed = 3,
  pauseAutoPlayOnMouseover = true,
  setCarousel,
  gap,
  align = 'center',
  axis = 'x',
  slidesToScroll = 1,
  inViewThreshold = 0,
  breakpoints = {},
  dragFree = false,
  dragThreshold = 10,
  loop = true,
  skipSnaps = false,
  duration = 25,
  startIndex = 0,
  className,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align,
    axis,
    slidesToScroll,
    inViewThreshold,
    breakpoints,
    dragFree,
    dragThreshold,
    loop,
    skipSnaps,
    duration,
    startIndex,
  })
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)
  emblaApi?.on('select', (e) => setSelectedSlideIndex(e.selectedScrollSnap()))
  const [pointerOverCarousel, setPointerOverCarousel] = useState(false)

  useEffect(() => {
    if (!setCarousel) return
    setCarousel(emblaApi)
  }, [emblaApi, setCarousel])

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      if (pointerOverCarousel && pauseAutoPlayOnMouseover) {
        return
      }
      emblaApi?.scrollNext()
    }, autoPlaySpeed * 1000)
    return () => clearInterval(interval)
  }, [autoPlay, emblaApi, autoPlaySpeed, pointerOverCarousel, pauseAutoPlayOnMouseover])

  const childrenStyles: CSSProperties = useMemo(() => {
    return { flexBasis: slidesPerView ? `${100 / slidesPerView}%` : 'unset', marginRight: gap }
  }, [slidesPerView, gap])

  const scrollSnaps = useMemo(() => emblaApi?.scrollSnapList(), [emblaApi])

  const indicatorStyle = useMemo(() => {
    switch (indicatorsPosition) {
      case 'bottom':
        return 'bottom-3 left-1/2 -translate-x-1/2'
      case 'top':
        return "top-3 left-1/2 -translate-x-1/2'"
      case 'left':
        return 'left-3 top-1/2  -translate-y-1/2 flex-col'
      case 'right':
        return 'right-3 top-1/2  -translate-y-1/2 flex-col'
    }
  }, [indicatorsPosition])

  return (
    <div
      onPointerOver={() => setPointerOverCarousel(true)}
      onPointerLeave={() => setPointerOverCarousel(false)}
      className="relative overflow-hidden"
      ref={emblaRef}
      {...props}>
      <div className={cn(`${axis === 'x' ? 'flex' : 'flex flex-col'}`, className)}>
        {React.Children.map(children, (child: React.ReactElement, i) =>
          React.cloneElement(child, {
            className: cn(
              `min-w-0 w-full flex-shrink-0 grow-0 ${i === children.length - 1 && !loop && '!mr-0'}`,
              child.props.className,
            ),
            style: childrenStyles,
          }),
        )}
      </div>
      <div className={`absolute flex gap-2 ${indicatorStyle}`}>
        {/* eslint-disable-next-line no-unused-vars */}
        {indicators &&
          scrollSnaps?.map((_, index) => (
            <div
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`aspect-square w-[9px] cursor-pointer rounded-full ${selectedSlideIndex === index ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
          ))}
      </div>
    </div>
  )
}

type CarouselControls = {
  setCarousel: Dispatch<SetStateAction<EmblaCarouselType | undefined>>
  carousel: EmblaCarouselType | undefined
}
export const useCarouselControls = (): CarouselControls => {
  const [carousel, setCarousel] = useState<EmblaCarouselType | undefined>(undefined)
  return { setCarousel, carousel }
}
