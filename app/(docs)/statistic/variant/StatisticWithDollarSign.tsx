"use client";
import { Statistic } from "@/src/components/Statistic";

const StatisticWithDollarSign = () => {
  return (
    <Statistic showDollar={true}>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

const StatisticWithDollarSignCode = `
"use client";
import { Statistic } from "keep-design";

const StatisticWithDollarSign = () => {
  return (
    <Statistic showDollar={true}>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

export default StatisticWithDollarSign;
`;

export { StatisticWithDollarSign, StatisticWithDollarSignCode };
