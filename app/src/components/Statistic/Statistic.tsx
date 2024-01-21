import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { Amount } from './Amout'
import { Rate } from './Rate'
import { StatisticContext } from './StatisticContext'
import { StatusIcon } from './StatusIcon'
import { Title } from './Title'
import { UserImg } from './UserImg'

/**
 * Props for the Statistic component.
 * @interface StatisticProps
 */
export interface StatisticProps {
  /**
   * Whether to show the dollar sign.
   * @type {boolean}
   * @default false
   */
  showDollar?: boolean
  /**
   * Whether to show the filter icon.
   * @type {boolean}
   * @default false
   */
  showFilter?: boolean
  /**
   * Specifies the background color of the icon.
   * @type {'primary' | 'success'}
   * @default 'primary'
   */
  iconBg?: 'primary' | 'success'
  /**
   * The child components of the Statistic component.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode
  /**
   * The label for the filter.
   * @type {string}
   * @default ''
   */
  filterLabel?: string
  /**
   * The data for the filter.
   * @type {string[]}
   * @default []
   */
  filterData?: string[]
  /**
   * Additional class name for the component.
   * @type {string}
   * @default ''
   */
  className?: string
}

const StatisticComponent: FC<StatisticProps> = ({
  showDollar = false,
  iconBg = 'primary',
  children,
  showFilter,
  filterLabel,
  filterData,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <StatisticContext.Provider value={{ showDollar, iconBg, showFilter, filterLabel, filterData }}>
        {children}
      </StatisticContext.Provider>
    </div>
  )
}

StatisticComponent.displayName = 'Statistic'
Title.displayName = 'Statistic.Title'
Rate.displayName = 'Statistic.Rate'
Amount.displayName = 'Statistic.Amount'
StatusIcon.displayName = 'Statistic.Icon'
UserImg.displayName = 'Statistic.Img'

export const Statistic = Object.assign(StatisticComponent, {
  Title: Title,
  Rate: Rate,
  Icon: StatusIcon,
  Img: UserImg,
  Amount: Amount,
})
