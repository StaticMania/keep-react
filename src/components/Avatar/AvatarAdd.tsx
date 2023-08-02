/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import type { PropsWithChildren } from "react";
import type { AvatarSizes } from "./Avatar";
import { useTheme } from "@/src/Keep/ThemeContex";

export type AvatarAddProps = PropsWithChildren<{
  icon?: string;
  size?: keyof AvatarSizes;
  bg?: string;
  iconColor?: string;
  ringColor?: string;
}>;

const AvatarAdd: React.FC<AvatarAddProps> = ({
  icon,
  size = "md",
  bg = "#F0F3F7",
  iconColor = "#5E718D",
  ringColor = "ring-white",
}) => {
  const theme = useTheme().theme.avatar;

  return (
    <div
      className={classNames(theme.add.base, theme.size[size], ringColor)}
      style={{ backgroundColor: bg }}
    >
      {icon ? (
        <img
          src={icon}
          alt="add_icon"
          className={classNames(theme.add.iconSize[size])}
        />
      ) : (
        <svg
          className={classNames(theme.add.iconSize[size])}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
        >
          <path
            d="M4.375 14h19.25M14 4.375v19.25"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

AvatarAdd.displayName = "Avatar.Add";
export default AvatarAdd;
