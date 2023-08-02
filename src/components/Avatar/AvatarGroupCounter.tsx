import classNames from "classnames";
import type { PropsWithChildren } from "react";
import type { AvatarSizes } from "./Avatar";
import { useTheme } from "@/src/Keep/ThemeContex";

export type AvatarGroupdCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
  size?: keyof AvatarSizes;
}>;

const AvatarGroupCounter: React.FC<AvatarGroupdCounterProps> = ({
  total,
  href,
  size = "md",
}) => {
  const theme = useTheme().theme.avatar;

  return (
    <a
      className={classNames(
        theme.size[size],
        theme.groupCounter.base,
        theme.statusType.fontSize.notification[size]
      )}
      href={href}
    >
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = "Avatar.GroupCounter";
export default AvatarGroupCounter;
