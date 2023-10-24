import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { Button } from "../Button/Button";
import { useTheme } from "../../Keep/ThemeContex";

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
  image?: ReactNode;
  redirectBtnSize?: "xs" | "sm" | "md" | "lg";
  buttonType?:
    | "primary"
    | "dashed"
    | "text"
    | "linkPrimary"
    | "linkGray"
    | "outlineGray"
    | "outlinePrimary"
    | "default";
}

export const Empty: FC<EmptyProps> = ({
  title,
  content,
  redirectUrl,
  image,
  buttonText,
  className,
  buttonType = "primary",
  redirectBtnSize = "sm",
}) => {
  const theme = useTheme().theme.empty;

  return (
    <div className={twMerge(theme.base, className)}>
      {image}
      <h1 className={theme.title}>{title}</h1>
      <p className={theme.content}>{content}</p>

      {buttonText && (
        <Button href={redirectUrl} size={redirectBtnSize} type={buttonType}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

Empty.displayName = "Empty";
