import type { ReactNode } from "react";
import { FC } from "react";
import { Button, ButtonSizes } from "../Button/Button";

interface PlayButtonProps {
  title?: string;
  type?: "primary" | "text" | "outlineGray" | "blur";
  icon?: ReactNode;
  circle?: boolean;
  size?: keyof ButtonSizes;
  className?: string;
}

export const PlayButton: FC<PlayButtonProps> = ({
  title,
  type = "primary",
  icon,
  circle = false,
  size = "md",
  className,
}) => {
  if (type === "blur") {
    return (
      <Button type={type} circle={circle} size={size} customClass={className}>
        <span className="text-white">{icon}</span>
      </Button>
    );
  }
  return (
    <Button type={type} circle={circle} size={size} customClass={className}>
      {typeof icon !== undefined && (
        <span className={title ? "pr-2" : ""}>{icon}</span>
      )}
      {title}
    </Button>
  );
};
