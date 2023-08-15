import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { Button } from "../Button";
import {
  EmptyData_1,
  EmptyData_2,
  EmptyData_3,
  EmptyData_4,
  Empty_Result_1,
  Empty_Result_2,
  Not_Found_Folder,
  Not_Found_Here,
  Something_Wrong_404,
} from "../../data/Icon";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepEmptyTheme {
  base: string;
  title: string;
  content: string;
}

export interface EmptyProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "title">> {
  title?: string;
  content?: string;
  redirectUrl?: string;
  buttonText?: string;
  iconType?: IconsType;
}

export type IconsType =
  | "empty_data_1"
  | "empty_data_2"
  | "empty_data_3"
  | "empty_data_4"
  | "not_found_folder"
  | "not_found_here"
  | "empty_result_1"
  | "empty_result_2"
  | "something_wrong_404";

export const EmptyIconsType = {
  empty_data_1: <EmptyData_1 />,
  empty_data_2: <EmptyData_2 />,
  empty_data_3: <EmptyData_3 />,
  empty_data_4: <EmptyData_4 />,
  not_found_folder: <Not_Found_Folder />,
  not_found_here: <Not_Found_Here />,
  empty_result_1: <Empty_Result_1 />,
  empty_result_2: <Empty_Result_2 />,
  something_wrong_404: <Something_Wrong_404 />,
};

export const Empty: FC<EmptyProps> = ({
  title,
  content,
  redirectUrl,
  iconType = "empty_data_1",
  buttonText = "Go to Home Page",
  className,
}) => {
  const theme = useTheme().theme.empty;

  return (
    <div className={classNames(theme.base, className)}>
      {EmptyIconsType[iconType]}
      <div className={theme.title}>{title}</div>
      <div className={theme.content}>{content}</div>

      <Button href={redirectUrl} size="sm" type="outlinePrimary">
        {buttonText}
      </Button>
    </div>
  );
};

Empty.displayName = "Empty";
