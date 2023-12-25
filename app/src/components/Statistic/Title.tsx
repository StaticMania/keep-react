import { FC } from 'react'
import { useStatisticContext } from './StatisticContext'
import { useTheme } from '../../Keep/ThemeContext'
import { Dropdown } from '../Dropdown'
import { cn } from '../../helpers/cn'

export interface keepTitleTheme {
  base: string
  title: string
  filter: {
    text: string
    icon: string
  }
}

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
  const theme = useTheme().theme.statistic
  return (
    <div className={cn(theme.title.base)}>
      <p className={cn(theme.title.title, className)}>{children}</p>
      {showFilter && (
        <Dropdown label={filterLabel} size="xs" variant="outlineGray" dismissOnClick={true}>
          {filterData?.map((item) => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
        </Dropdown>
      )}
    </div>
  )
}
