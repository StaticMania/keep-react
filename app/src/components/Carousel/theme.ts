import { KeepColors } from '../../Keep/KeepTheme'

export interface KeepCarouselTheme {
  viewport: string
  controls: {
    wrapper: string
    button: {
      container: string
      wrapper: string
      svg: string
    }
    indicators: {
      container: string
      dot: string
    }
  }
  item: {
    container: string
    slide: string
  }
}

// export type IndicatorsType = 'dot' | 'ring' | 'bar' | 'square' | 'squareRing'

export interface IndicatorsTypeColors extends Pick<KeepColors, 'white' | 'slate'> {
  [key: string]: string
}

export const carouselTheme: KeepCarouselTheme = {
  viewport: 'overflow-hidden',
  controls: {
    wrapper: 'flex items-center justify-between mt-[1.8rem]',
    button: {
      container: 'flex items-center gap-2',
      wrapper:
        'inline-flex items-center justify-center border border-gray-100 rounded-full size-[3rem] text-gray-600 hover:text-gray-800 hover:bg-gray-50 disabled:bg-gray-50 disabled:opacity-50',
      svg: 'size-4',
    },
    indicators: {
      container: 'flex flex-wrap items-center gap-2',
      dot: 'inline-flex size-4 rounded-full border-2 border-gray-200',
    },
  },
  item: {
    container: 'flex',
    slide: 'flex-[0_0_100%] h-auto min-w-0 overflow-hidden pl-4 ',
  },
}
