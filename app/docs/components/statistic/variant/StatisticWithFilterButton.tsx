"use clietn";
import { Statistic } from "@/src/components";

const StatisticWithFilterButton = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div>
        <Statistic.Title>Memebers</Statistic.Title>
      </div>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

const StatisticWithFilterButtonCode = `
"use clietn";
import { Statistic } from "keep-react";

const StatisticWithFilterButton = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div>
        <Statistic.Title>Memebers</Statistic.Title>
      </div>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

export default StatisticWithFilterButton;
`;

export { StatisticWithFilterButton, StatisticWithFilterButtonCode };
