"use client";
import { Statistic } from "@/src/components";

const DefaultStatistic = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <Statistic.Amount>{7381237}</Statistic.Amount>
    </Statistic>
  );
};

const DefaultStatisticCode = `
"use client";
import { Statistic } from "keep-react";

const DefaultStatistic = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <Statistic.Amount>{7381237}</Statistic.Amount>
    </Statistic>
  );
};

export default DefaultStatistic;
`;

export { DefaultStatistic, DefaultStatisticCode };
