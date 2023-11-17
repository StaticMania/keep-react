import { FC, ReactNode } from 'react'
import { Rate, type keepRateTheme } from './Rate'
import { Title, type keepTitleTheme } from './Title'
import { StatusIcon, type keepIconTheme } from './StatusIcon'
import { Amount, type keepAmountTheme } from './Amout'
import { UserImg } from './UserImg'
import { StatisticContext } from './StatisticContext'
import { cn } from '../../helpers/cn'

export interface keepStatisticTheme {
  rate: keepRateTheme
  amount: keepAmountTheme
  title: keepTitleTheme
  icon: keepIconTheme
}

export interface StatisticProps {
  showDollar?: boolean
  showFilter?: boolean
  iconBg?: 'primary' | 'success'
  children?: ReactNode
  filterLabel?: string
  filterData?: string[]
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
