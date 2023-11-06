import type { ComponentProps, FC, PropsWithChildren } from "react";
import { DeepPartial } from "../../helpers/deep-partial";
import { useTheme } from "../../Keep/ThemeContex";

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
  const theme = useTheme().theme.table.caption.base;
  return (
    <caption {...props} className={theme}>
      {children}
    </caption>
  );
};
