"use client";
import { Statistic } from "@/src/components/Statistic";

const DefaultStatistic = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <Statistic.Amount>{1212122}</Statistic.Amount>
    </Statistic>
  );
};

const DefaultStatisticCode = `
"use client";
import { Statistic } from "keep-design";

const DefaultStatistic = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <Statistic.Amount>{1212122}</Statistic.Amount>
    </Statistic>
  );
};

export default DefaultStatistic;
`;

export { DefaultStatistic, DefaultStatisticCode };
