import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { Dropdown } from '../Dropdown'
import { useStatisticContext } from './StatisticContext'
import { statisticsTheme } from './theme'

/**
 * Props for the Title component.
 * @interface TitleProps
 */
export interface TitleProps {
  /**
   * The content of the title.
   * @type {string}
   * @default ''
   */
  children: string
  /**
   * Additional class name for the title.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { showFilter, filterLabel, filterData } = useStatisticContext()
  const theme = statisticsTheme
  return (
    <div className={cn(theme.title.base)}>
      <p className={cn(theme.title.title, className)}>{children}</p>
      {showFilter && (
        <Dropdown label={filterLabel} size="xs" variant="outline" dismissOnClick={true}>
          {filterData?.map((item) => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
        </Dropdown>
      )}
    </div>
  )
}
