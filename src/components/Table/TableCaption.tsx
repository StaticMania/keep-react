import { DeepPartial } from "@/src/helpers/deep-partial";
import type { ComponentProps, FC, PropsWithChildren } from "react";

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
