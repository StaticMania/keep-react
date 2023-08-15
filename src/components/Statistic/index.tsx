import { FC, ReactNode } from "react";
import Amount, { keepAmountTheme } from "./Amout";
import Rate, { keepRateTheme } from "./Rate";
import { StatisticContext } from "./StatisticContext";
import StatusIcon, { keepIconTheme } from "./StatusIcon";
import Title, { keepTitleTheme } from "./Title";
import UserImg from "./UserImg";

export interface keepStatisticTheme {
  rate: keepRateTheme;
  amount: keepAmountTheme;
  title: keepTitleTheme;
  icon: keepIconTheme;
}

interface StatisticProps {
  showDollar?: boolean;
  showFilter?: boolean;
  iconBg?: "primary" | "success";
  children?: ReactNode;
}

const StatisticComponent: FC<StatisticProps> = ({
  showDollar = false,
  iconBg = "primary",
  children,
  showFilter,
}) => {
  return (
    <div>
      <StatisticContext.Provider value={{ showDollar, iconBg, showFilter }}>
        {children}
      </StatisticContext.Provider>
    </div>
  );
};

StatisticComponent.displayName = "Statistic";
Title.displayName = "Statistic.Title";
Rate.displayName = "Statistic.Rate";
Amount.displayName = "Statistic.Amount";
StatusIcon.displayName = "Statistic.Icon";
UserImg.displayName = "Statistic.Img";

export const Statistic = Object.assign(StatisticComponent, {
  Title: Title,
  Rate: Rate,
  Icon: StatusIcon,
  Img: UserImg,
  Amount: Amount,
});
