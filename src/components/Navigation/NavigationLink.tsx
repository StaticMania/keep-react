import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "~/src/Keep/ThemeContex";

export interface NavLinkProps {
  className?: string;
  icon?: React.ReactNode;
  iconAnimation?: boolean;
  linkName?: string;
  href?: string;
}

export interface NavLinkTheme {
  base: string;
  icon: {
    on: string;
    off: string;
  };
  linkText: string;
  iconAnimation: {
    on: string;
    off: string;
  };
}

export const NavigationLink: FC<NavLinkProps> = ({
  icon,
  iconAnimation = true,
  linkName,
  href = "/",
  className,
}) => {
  const { navLink } = useTheme().theme.navigation;
  return (
    <li>
      <a
        href={href}
        className={twMerge(
          navLink.base,
          icon ? navLink.icon.on : navLink.icon.off,
          className
        )}
      >
        <span className={twMerge(navLink.linkText)}>{linkName}</span>
        {icon ? (
          <span
            className={twMerge(
              iconAnimation
                ? navLink.iconAnimation.on
                : navLink.iconAnimation.off
            )}
          >
            {icon}
          </span>
        ) : null}
      </a>
    </li>
  );
};
