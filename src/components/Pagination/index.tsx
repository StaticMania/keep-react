import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useState } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { useTheme } from "@/src/Keep/ThemeContex";
import { paginationGenerator } from "@/src/helpers/rangeWithDots";

export interface keepPaginationTheme {
  base: string;
  paginateWithBorder: string;
  layout: {
    table: {
      base: string;
      span: string;
    };
  };
  pages: {
    base: string;
    previous: {
      base: string;
      icon: string;
      title: string;
      iconWithText: string;
      iconWithOutText: string;
    };
    next: {
      base: string;
      icon: string;
      title: string;
      iconWithText: string;
      iconWithOutText: string;
    };
    selector: {
      base: string;
      active: {
        base: string;
        circle: string;
        roundSquare: string;
      };
    };
    prevNextShape: {
      none: string;
      circle: string;
      round: string;
      roundSquare: string;
    };
  };
  goTo: {
    base: string;
    title: string;
    input: string;
    withBorder: string;
    goToShape: {
      none: string;
      circle: string;
      round: string;
      roundSquare: string;
    };
  };
}

export type PaginationProps = PropsWithChildren<Pagination>;
interface Pagination extends Omit<ComponentProps<"nav">, "className"> {
  currentPage: number;
  prevNextShape?: "circle" | "round" | "roundSquare" | "none";
  goToShape?: "circle" | "round" | "roundSquare" | "none";
  activeCurrentPageShape?: "circle" | "roundSquare";
  layout?: "navigation" | "pagination" | "table";
  onPageChange: (page: number) => void;
  iconWithText?: boolean;
  iconWithOutText?: boolean;
  paginateWithBorder?: boolean;
  showGoToPaginate?: boolean;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  layout = "pagination",
  prevNextShape = "none",
  goToShape = "none",
  activeCurrentPageShape = "roundSquare",
  onPageChange,
  totalPages,
  iconWithText,
  iconWithOutText,
  showGoToPaginate,
  paginateWithBorder,
  ...props
}): JSX.Element => {
  const [numberVal, setNumberVal] = useState<number>(0);
  const firstPage = Math.max(1, currentPage - 4);
  const lastPage = Math.min(currentPage + 4, totalPages);

  const theme = useTheme().theme.pagination;
  const theirProps = excludeClassName(props);

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <div className={classNames(theme.base)}>
      {layout === "table" && (
        <div className={theme.layout.table.base}>
          Showing <span className={theme.layout.table.span}>{firstPage}</span>{" "}
          to&nbsp;
          <span className={theme.layout.table.span}>{lastPage}</span> of&nbsp;
          <span className={theme.layout.table.span}>{totalPages}</span> Entries
        </div>
      )}
      <nav
        className={classNames(
          theme.base,
          paginateWithBorder && theme.paginateWithBorder
        )}
        {...theirProps}
      >
        <ul className={theme.pages.base}>
          <li>
            <button
              className={classNames(
                theme.pages.previous.base,
                theme.pages.prevNextShape[prevNextShape],
                iconWithText && theme.pages.previous.iconWithText,
                iconWithOutText && theme.pages.previous.iconWithOutText
              )}
              onClick={() => goToPreviousPage()}
            >
              {iconWithText && (
                <>
                  <ArrowLeft className={theme.pages.previous.icon} />
                  <span className={theme.pages.previous.title}>Previous</span>
                </>
              )}
              {iconWithOutText && (
                <ArrowLeft className={theme.pages.previous.icon} />
              )}
            </button>
          </li>
          {layout === "pagination" &&
            paginationGenerator(firstPage, lastPage).map(
              (page: string | number, index: number): JSX.Element => {
                return (
                  <li
                    aria-current={page === currentPage ? "page" : undefined}
                    key={index}
                  >
                    <button
                      className={classNames(
                        theme.pages.selector.base,
                        theme.pages.selector.active[activeCurrentPageShape],
                        {
                          [theme.pages.selector.active.base]:
                            currentPage === page,
                        }
                      )}
                      onClick={() => {
                        if (typeof page === "string")
                          onPageChange(Math.min(currentPage + 2, totalPages));
                        if (typeof page === "number") onPageChange(page);
                      }}
                    >
                      {page}
                    </button>
                  </li>
                );
              }
            )}
          <li>
            <button
              className={classNames(
                theme.pages.next.base,
                theme.pages.prevNextShape[prevNextShape],
                iconWithText && theme.pages.next.iconWithText,
                iconWithOutText && theme.pages.next.iconWithOutText
              )}
              onClick={() => goToNextPage()}
            >
              {iconWithText && (
                <>
                  <span className={theme.pages.next.title}>Next</span>
                  <ArrowRight className={theme.pages.next.icon} />
                </>
              )}
              {iconWithOutText && (
                <ArrowRight className={theme.pages.next.icon} />
              )}
            </button>
          </li>

          {layout === "pagination" && showGoToPaginate && (
            <li
              className={classNames(
                theme.goTo.base,
                paginateWithBorder && theme.goTo.withBorder
              )}
            >
              <span className="text-slate-200">/</span>
              <span className={classNames(theme.goTo.title)}>Go to</span>
              <input
                className={classNames(
                  theme.goTo.input,
                  theme.goTo.goToShape[goToShape]
                )}
                type="number"
                placeholder="Number"
                value={numberVal}
                onChange={(e) => setNumberVal(parseInt(e.target.value, 10))}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    e.preventDefault();
                    onPageChange(numberVal);
                  }
                }}
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
