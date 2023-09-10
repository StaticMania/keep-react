import type { ComponentProps, FC, PropsWithChildren } from "react";
import { DeepPartial } from "../../helpers/deep-partial";

export interface keepTableCaptionTheme {
  base: string;
}

export interface TableCaptionProps
  extends PropsWithChildren,
    ComponentProps<"caption"> {
  theme?: DeepPartial<keepTableCaptionTheme>;
}

export const TableCaption: FC<TableCaptionProps> = ({
  children,
  className,
  ...props
}) => {
  return <caption {...props}>{children}</caption>;
};
