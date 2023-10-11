import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useStepContext } from "./StepContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface StepItemProps {
  title?: string;
  description?: string;
  numberOfSteps?: number;
  completed?: boolean;
  icon?: ReactNode;
  active?: boolean;
}

export const StepItem: FC<StepItemProps> = ({
  title,
  description,
  numberOfSteps = 1,
  completed = false,
  active = false,
  icon,
}) => {
  const { stepType, borderType = "solid" } = useStepContext();
  const theme = useTheme().theme.step;
  return (
    <div
      className={twMerge(
        theme.items.base,
        completed ? theme.main.completed.on : theme.main.completed.off,
        theme.main.borderType[borderType]
      )}
    >
      {stepType === "number" && (
        <div
          className={twMerge(
            theme.items.stepType.base,
            theme.items.stepType.number.base,
            completed && theme.items.stepType.number.on,
            !completed && theme.items.stepType.number.off,
            active && theme.items.stepType.number.active
          )}
        >
          {numberOfSteps}
        </div>
      )}
      {stepType === "point" && (
        <div
          className={twMerge(
            theme.items.stepType.base,
            theme.items.stepType.point.base,
            completed && theme.items.stepType.point.on,
            active && theme.items.stepType.point.active
          )}
        >
          &nbsp;
        </div>
      )}
      {stepType === "icon" && (
        <div
          className={twMerge(
            theme.items.stepType.base,
            completed && theme.items.stepType.icon.on,
            !completed && !active && theme.items.stepType.icon.off,
            active && theme.items.stepType.icon.active
          )}
        >
          {icon}
        </div>
      )}

      <div className={twMerge(theme.stepText.base)}>
        <h3
          className={twMerge(
            theme.stepText.title.base,

            active ? theme.stepText.title.active : theme.stepText.title.inActive
          )}
        >
          {title}
        </h3>
        <p
          className={twMerge(
            theme.stepText.description.base,
            active
              ? theme.stepText.description.active
              : theme.stepText.description.inActive
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
