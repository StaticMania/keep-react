'use client'
import { Users } from 'phosphor-react'
import { Statistic } from '../../../../src'

const StatisticWithIcon = () => {
  return (
    <Statistic
      showFilter={true}
      showDollar={true}
      iconBg="primary"
      filterLabel="This Month"
      filterData={['January', 'February', 'March', 'April']}>
      <div className="flex items-center gap-4">
        <Statistic.Icon icon={<Users size={32} color="#fff" />} />
        <div>
          <div className="flex items-center gap-2">
            <Statistic.Amount>{7381237}</Statistic.Amount>
            <Statistic.Rate>3.5</Statistic.Rate>
          </div>
          <Statistic.Title>Members</Statistic.Title>
        </div>
      </div>
    </Statistic>
  )
}

const StatisticWithIconCode = `
"use client";
import { Users } from "phosphor-react";
import { Statistic } from "keep-react";

export const StatisticComponent = () => {
  return (
    <Statistic
      showFilter={true}
      showDollar={true}
      iconBg="primary"
      filterLabel="This Month"
      filterData={["January", "February", "March", "April"]}
    >
      <div className="flex items-center gap-4">
        <Statistic.Icon icon={<Users size={32} color="#fff" />} />
        <div>
          <div className="flex items-center gap-2">
            <Statistic.Amount>{7381237}</Statistic.Amount>
            <Statistic.Rate>3.5</Statistic.Rate>
          </div>
          <Statistic.Title>Members</Statistic.Title>
        </div>
      </div>
    </Statistic>
  );
}
`

export { StatisticWithIcon, StatisticWithIconCode }
