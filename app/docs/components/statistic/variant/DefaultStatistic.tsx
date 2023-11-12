'use client'
import { Statistic } from '~/src'

const DefaultStatistic = () => {
  return (
    <Statistic>
      <Statistic.Title>Members</Statistic.Title>
      <Statistic.Amount>{7381237}</Statistic.Amount>
    </Statistic>
  )
}

const DefaultStatisticCode = `
"use client";
import { Statistic } from "keep-react";

export const StatisticComponent = () => {
  return (
    <Statistic>
      <Statistic.Title>Members</Statistic.Title>
      <Statistic.Amount>{7381237}</Statistic.Amount>
    </Statistic>
  );
}
`

export { DefaultStatistic, DefaultStatisticCode }
