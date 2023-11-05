"use client";
import { Statistic } from "~/src";

const StatisticWithFilterButton = () => {
  return (
    <Statistic
      showFilter={true}
      showDollar={true}
      filterLabel="This Month"
      filterData={["January", "February", "March", "April"]}
    >
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
"use client";
import { Statistic } from "keep-react";

export const StatisticComponent = () => {
  return (
    <Statistic
      showFilter={true}
      showDollar={true}
      filterLabel="This Month"
      filterData={["January", "February", "March", "April"]}
    >
      <div>
        <Statistic.Title>Memebers</Statistic.Title>
      </div>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
}
`;

export { StatisticWithFilterButton, StatisticWithFilterButtonCode };
