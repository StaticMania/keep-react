import { X } from "phosphor-react";
import type { ComponentProps, FC, ReactNode } from "react";
import { useToastContext } from "./ToastContext";
import { useTheme } from "@/src/Keep/ThemeContex";

type ToastToggleProps = ComponentProps<"button"> & {
  xIcon?: ReactNode;
};

export const ToastToggle: FC<ToastToggleProps> = ({
  xIcon: XIcon = <X size={20} />,
}) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } =
    useToastContext();
  const theme = useTheme().theme.toast.toggle;

  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };

  return (
    <button
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={theme.base}
    >
      {XIcon}
    </button>
  );
};
