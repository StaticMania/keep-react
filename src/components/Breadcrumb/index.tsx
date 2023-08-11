import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { BreadcrumbContext } from "./BreadcrumbContext";
import BreadcrumbItem from "./BreadcrumbItem";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepBreadCrumbTheme {
  breadCrumbWithBorder: string;
  item: {
    base: string;
    chevron: string;
    href: {
      off: string;
      on: string;
    };
    icon: string;
    iconWrapper: string;
    disabled: string;
    activeItem: {
      base: string;
      border: string;
      bar: string;
    };
  };
  list: string;
}

export interface BreadcrumbProps
  extends PropsWithChildren<ComponentProps<"nav">> {
  separatorIcon?: ReactNode;
  breadCrumbWithBorder?: boolean;
}

const BreadcrumbComponent: FC<BreadcrumbProps> = ({
  children,
  separatorIcon,
  breadCrumbWithBorder = false,
  ...props
}) => {
  const theme = useTheme().theme.breadcrumb;

  return (
    <BreadcrumbContext.Provider value={{ separatorIcon }}>
      <nav
        aria-label="Breadcrumb"
        className={classNames(
          breadCrumbWithBorder && theme.breadCrumbWithBorder
        )}
        {...props}
      >
        <ol className={theme.list}>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

BreadcrumbComponent.displayName = "Breadcrumb";
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
});
