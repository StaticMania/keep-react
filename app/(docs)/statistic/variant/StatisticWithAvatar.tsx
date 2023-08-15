"use client";
import { Statistic } from "@/src/components/Statistic";

const StatisticWithAvatar = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div className="flex items-center gap-4">
        <Statistic.Img img="/images/avatar/avatar-4.png" />
        <div>
          <div className="flex items-center gap-2">
            <Statistic.Amount>{1212122}</Statistic.Amount>
            <Statistic.Rate>1.5</Statistic.Rate>
          </div>
          <Statistic.Title>Memebers</Statistic.Title>
        </div>
      </div>
    </Statistic>
  );
};

const StatisticWithAvatarCode = `
"use client";
import { Statistic } from "keep-design";

const StatisticWithAvatar = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div className="flex items-center gap-4">
        <Statistic.Img img="/images/avatar/avatar-4.png" />
        <div>
          <div className="flex items-center gap-2">
            <Statistic.Amount>{1212122}</Statistic.Amount>
            <Statistic.Rate>1.5</Statistic.Rate>
          </div>
          <Statistic.Title>Memebers</Statistic.Title>
        </div>
      </div>
    </Statistic>
  );
};

export default StatisticWithAvatar;
`;

export { StatisticWithAvatar, StatisticWithAvatarCode };
