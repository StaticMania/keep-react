import classNames from "classnames";
import { ComponentProps, FC, ReactNode, useState } from "react";
import { excludeClassName } from "../../helpers/exclude";
import {
  KeepCheckboxShape,
  KeepSizes,
  KeepStateColors,
} from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepCheckboxTheme {
  base: string;
  enabled: string;
  disabled: string;
  type: CheckboxType;
  label: CheckboxSizes;
  labelColor: CheckboxLabelColors;
  variant: {
    withCheck: CheckboxColors;
    withoutCheck: CheckboxColors;
  };
  size: CheckboxSizes;
}

export interface CheckboxProps
  extends Omit<
    ComponentProps<"input">,
    "className" | "color" | "size" | "type"
  > {
  label?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size?: keyof CheckboxSizes;
  color?: keyof CheckboxColors;
  labelColor?: keyof CheckboxLabelColors;
  type?: keyof CheckboxType;
  variant?: keyof CheckboxVariant;
  fieldName?: string;
  isChecked?: boolean;
  value?: string;
  handleChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface KeepCheckboxVariant {
  withCheck: keyof CheckboxColors;
  withoutCheck: keyof CheckboxColors;
}

export interface CheckboxVariant
  extends Pick<KeepCheckboxVariant, "withCheck" | "withoutCheck"> {
  [key: string]: keyof CheckboxColors;
}

export interface CheckboxSizes extends Pick<KeepSizes, "xs" | "sm" | "md"> {
  [key: string]: string;
}

export interface CheckboxColors
  extends Pick<KeepStateColors, "error" | "info" | "success" | "warning"> {
  [key: string]: string;
}
export interface CheckboxLabelColors
  extends Pick<KeepStateColors, "error" | "info" | "success" | "warning"> {
  [key: string]: string;
}

export interface CheckboxType
  extends Pick<KeepCheckboxShape, "round" | "circle"> {
  [key: string]: string;
}

const CheckboxComponent: FC<CheckboxProps> = ({
  color = "info",
  labelColor = "info",
  label = "Checkbox",
  size = "md",
  checked = false,
  disabled = false,
  type = "round",
  id = "",
  variant = "withCheck",
  fieldName,
  value,
  ...props
}) => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.checkbox;
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div data-testid="checkbox-element">
      <div className="inline-flex items-center">
        {checked ? (
          <input
            type="checkbox"
            id={id}
            value={value}
            disabled={disabled}
            checked={isChecked}
            name={fieldName}
            {...theirProps}
            onChange={(e) => setIsChecked(e.target.checked)}
            className={classNames(
              theme.base,
              theme.type[type],
              theme.size[size],
              theme.variant[variant as keyof KeepCheckboxVariant][color],
              !disabled && theme.enabled,
              disabled && theme.disabled
            )}
          />
        ) : (
          <input
            type="checkbox"
            id={id}
            value={value}
            disabled={disabled}
            name={fieldName}
            {...theirProps}
            className={classNames(
              theme.base,
              theme.type[type],
              theme.size[size],
              theme.variant[variant as keyof KeepCheckboxVariant][color],
              !disabled && theme.enabled,
              disabled && theme.disabled
            )}
          />
        )}
        {typeof label !== "undefined" && (
          <label
            htmlFor={id}
            className={classNames(
              !disabled && theme.enabled,
              disabled && theme.disabled,
              theme.label[size],
              theme.labelColor[labelColor]
            )}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

CheckboxComponent.displayName = "CheckBox";
export const CheckBox = CheckboxComponent;
