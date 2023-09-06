"use client";
import { Statistic } from "@/src/components";

const StatisticWithProgressRate = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

const StatisticWithProgressRateCode = `
"use client";
import { Statistic } from "keep-react";

const StatisticWithProgressRate = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

export default StatisticWithProgressRate;
`;

export { StatisticWithProgressRate, StatisticWithProgressRateCode };
