import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { RatingAdvanced, RatingAdvancedSizes } from "./RatingAdvanced";
import { RatingContext } from "./RatingContext";
import { RatingStar } from "./RatingStar";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepRatingTheme {
  base: string;
  star: {
    base: string;
  };
  advanced: {
    base: string;
    label: string;
    progress: {
      base: string;
      fill: string;
      label: string;
      size: RatingAdvancedSizes;
    };
  };
}

export interface RatingProps extends PropsWithChildren<ComponentProps<"div">> {
  size?: number;
}

const RatingComponent: FC<RatingProps> = ({
  children,
  size,
  className,
  ...props
}) => {
  const theme = useTheme().theme.rating;

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames(theme.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};

RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
});
