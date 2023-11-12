import { twMerge } from 'tailwind-merge'
import { FC } from 'react'
import { useStatisticContext } from './StatisticContext'
import { useTheme } from '../../Keep/ThemeContext'
import { Dropdown } from '../Dropdown'

export interface keepTitleTheme {
  base: string
  title: string
  filter: {
    text: string
    icon: string
  }
}
export interface TitleProps {
  children: string
}

export const Title: FC<TitleProps> = ({ children }) => {
  const { showFilter, filterLabel, filterData } = useStatisticContext()

  const theme = useTheme().theme.statistic
  return (
    <div className={twMerge(theme.title.base)}>
      <p className={twMerge(theme.title.title)}>{children}</p>

      {showFilter && (
        <Dropdown label={filterLabel} size="xs" type="outlineGray" dismissOnClick={true}>
          {filterData?.map((item) => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
        </Dropdown>
      )}
    </div>
  )
}
