"use client";
import { Statistic } from "@/src/components/Statistic";

const StatisticWithProgressRate = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{1212122}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

const StatisticWithProgressRateCode = `
"use client";
import { Statistic } from "keep-design";

const StatisticWithProgressRate = () => {
  return (
    <Statistic>
      <Statistic.Title>Memebers</Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{1212122}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

export default StatisticWithProgressRate;
`;

export { StatisticWithProgressRate, StatisticWithProgressRateCode };
