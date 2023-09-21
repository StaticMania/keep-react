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
}

export const Empty: FC<EmptyProps> = ({
  title,
  content,
  redirectUrl,
  image,
  buttonText = "Go to Home Page",
  className,
}) => {
  const theme = useTheme().theme.empty;

  return (
    <div className={twMerge(theme.base, className)}>
      {image}
      <h1 className={theme.title}>{title}</h1>
      <p className={theme.content}>{content}</p>
      <Button href={redirectUrl} size="sm" type="outlinePrimary">
        {buttonText}
      </Button>
    </div>
  );
};

Empty.displayName = "Empty";
