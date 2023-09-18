/* eslint-disable @next/next/no-img-element */
import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { AvatarAdd } from "./AvatarAdd";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarGroupCounter } from "./AvatarGroupCounter";
import { KeepPositions, KeepShapes, KeepSizes } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepAvatarTheme {
  base: string;
  bordered: string;
  img: {
    off: string;
    on: string;
  };
  size: AvatarSizes;
  customStatusIcon: AvatarSizes;
  rounded: string;
  shape: {
    square: string;
    round: string;
    roundSquare: AvatarSizes;
  };
  stacked: string;
  status: {
    away: string;
    busy: string;
    offline: string;
    online: string;
  };
  statusType: {
    type: AvatarStatusType;
    size: KeepAvatarStatusTypeSize;
    fontSize: KeepAvatarStatusFontSize;
  };
  statusPosition: {
    square: KeepAvatarStatusPositions;
    round: KeepAvatarStatusPositions;
    roundSquare: KeepAvatarStatusPositions;
  };
  groupCounter: {
    base: string;
  };
  add: {
    base: string;
    iconSize: AvatarSizes;
  };
}

export interface AvatarSizes
  extends Pick<KeepSizes, "xs" | "sm" | "md" | "lg" | "xl" | "2xl"> {
  [key: string]: string;
}

export interface AvatarShape
  extends Pick<KeepShapes, "square" | "round" | "roundSquare"> {
  [key: string]: string;
}

export interface AvatarStatusType
  extends Pick<KeepAvatarStatusType, "dot" | "notification"> {
  [key: string]: string;
}

export interface AvatarStatusPositions
  extends Pick<
    KeepPositions,
    "bottom-left" | "bottom-right" | "top-left" | "top-right"
  > {
  [key: string]: string;
}

export interface KeepAvatarStatusType {
  dot: string;
  notification: string;
}

export interface KeepAvatarStatusTypeSize {
  dot: AvatarSizes;
  notification: AvatarSizes;
}

export interface StatusPositions {
  xs: AvatarStatusPositions;
  sm: AvatarStatusPositions;
  md: AvatarStatusPositions;
  lg: AvatarStatusPositions;
  xl: AvatarStatusPositions;
  "2xl": AvatarStatusPositions;
}

export interface KeepAvatarStatusPositions {
  dot: StatusPositions;
  notification: StatusPositions;
}

export interface KeepAvatarStatusFontSize {
  notification: AvatarSizes;
}

export interface AvatarProps extends PropsWithChildren<ComponentProps<"div">> {
  alt?: string;
  bordered?: boolean;
  img?: string;
  size?: keyof AvatarSizes;
  shape?: keyof KeepShapes;
  stacked?: boolean;
  rounded?: boolean;
  status?: "away" | "busy" | "offline" | "online";
  statusType?: keyof KeepAvatarStatusType;
  statusPosition?: keyof KeepPositions;
  totalNotification?: number;
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = "",
  bordered = false,
  children,
  img,
  shape = "square",
  size = "md",
  stacked = false,
  rounded = false,
  status,
  statusType = "dot",
  statusPosition = "top-left",
  totalNotification = 99,
  ...props
}) => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.avatar;

  return (
    <div data-testid="avatar-element" {...theirProps}>
      <div className="relative">
        {img ? (
          <img
            alt={alt}
            className={twMerge(
              shape === "roundSquare"
                ? theme.shape.roundSquare[size]
                : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              rounded && theme.rounded,
              theme.img.on,
              theme.size[size]
            )}
            data-testid="keep-avatar-img"
            src={img}
          />
        ) : (
          <div
            className={twMerge(
              shape === "roundSquare"
                ? theme.shape.roundSquare[size]
                : theme.shape[shape],
              bordered && theme.bordered,
              stacked && theme.stacked,
              rounded && theme.rounded,
              theme.img.off,
              theme.size[size]
            )}
            data-testid="keep-avatar-img"
          >
            <svg
              className="absolute h-auto w-auto"
              fill="none"
              viewBox="-10 -10 70 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.81 40.498a21.007 21.007 0 0 1 36.38 0"
                stroke="#8897AE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 30c6.627 0 12-5.373 12-12S30.627 6 24 6s-12 5.373-12 12 5.373 12 12 12Z"
                stroke="#8897AE"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        )}
        {status && (
          <span
            className={twMerge(
              theme.status[status],
              theme.statusType.type[statusType],
              theme.statusType.size[statusType][size],
              theme.statusPosition[shape][statusType][
                size as keyof StatusPositions
              ][statusPosition],
              statusType === "notification" &&
                theme.statusType.fontSize.notification[size]
            )}
          >
            {statusType === "notification" && `${totalNotification}`}
          </span>
        )}
      </div>
      {children && <div className="text-center">{children}</div>}
    </div>
  );
};

AvatarComponent.displayName = "Avatar";

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
  Add: AvatarAdd,
});
